using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Dtos.Payment;
using BCRemitClone2.Server.Enums;
using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Security.Claims;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/transactions")]
    [ApiController]
    public class PaymentTransactionController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public PaymentTransactionController(ApplicationDBContext context)
        {
            _context = context;
        }
        [Authorize]
        [HttpPost("{beneficiaryId}")]
        public async Task<IActionResult> CreateTransaction(int beneficiaryId)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
                return Unauthorized("User not logged in");

            var transaction = new TransactionHistory
            {
                Id = Guid.NewGuid(),
                UserId = userId,
                BeneficiaryId = beneficiaryId,
                Status = TransactionStatus.Draft,
                CreatedAt = DateTime.UtcNow,
                PaymentMethod = "Online Bank Transfer",
                SendAmount = 0,           
                TransferFee = 0,          
                TotalAmount = 0           
            };

            _context.transactionHistories.Add(transaction);
            await _context.SaveChangesAsync();

            return Ok(new { transactionId = transaction.Id });
        }

        [Authorize]
        [HttpPut("{id}/payment")]
        public async Task<IActionResult> UpdatePayment(int id, CreatePaymentDto createPaymentDto)
        {
            var transaction = await _context.transactionHistories
                .Include(b => b.Beneficiary)
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();

            if (transaction == null) return NotFound();

            const decimal fixedFee = 2.99m;

            transaction.SendAmount = createPaymentDto.Amount;
            transaction.TransferFee = fixedFee;
            transaction.TotalAmount = createPaymentDto.Amount + fixedFee;
            transaction.PaymentMethod = createPaymentDto.PaymentMethod ?? "OnlineBankTransfer";
            transaction.Status = TransactionStatus.Pending;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [Authorize]
        [HttpPut("{id}/purpose-of-remittance")]
        public async Task<IActionResult> UpdatePurposeOfRemittance(int id, CreatePurposeOfRemittance createPaymentDto)
        {
            var transaction = await _context.transactionHistories
                .Include(b => b.Beneficiary)
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();

            if (transaction == null) return NotFound();

            transaction.PurposeOfRemittance = createPaymentDto.PurposeOfRemittance;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [Authorize]
        [HttpGet("{id}/transaction-information")]
        public async Task<ActionResult<TransactionDto>> GetTransactionInformation(int id)
        {
            var transaction = await _context.transactionHistories
                .Include(b => b.Beneficiary)
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();

            if (transaction == null) return NotFound();

            return Ok(new TransactionDto
            {
                Id = transaction.Id,
                UserId = transaction.UserId,
                BeneficiaryId = transaction.BeneficiaryId,
                BeneficiaryName = $"{transaction.Beneficiary.FirstName} {transaction?.Beneficiary.MiddleName} {transaction!.Beneficiary.LastName}",
                SendAmount = transaction.SendAmount,
                TransferFee = transaction.TransferFee,
                TotalAmount = transaction.TotalAmount,
                PurposeOfRemittance = transaction.PurposeOfRemittance,
                PaymentMethod = transaction.PaymentMethod,
                Status = transaction.Status,
                CreatedAt = transaction.CreatedAt,
                CompletedAt = transaction.CompletedAt,
            });
        }

        [Authorize]
        [HttpGet("{id}/confirm-payment")]
        public async Task<ActionResult<ConfirmPageDto>> GetConfirmPage(int id)
        {
            var transaction = await _context.transactionHistories
                .Include(b => b.Beneficiary)
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();

            if (transaction == null) return NotFound();

            var senderBank = await _context.UserBankAccountDetails
                .FirstAsync(b => b.UserId == transaction.UserId && b.IsDefault);

            var beneficiaryBank = await _context.BeneficiaryBankAccounts
                .FirstAsync(b => b.BeneficiaryId == transaction.BeneficiaryId);

            var reference = $"TX-{transaction.Id.ToString()[..8]}";

            return Ok(new ConfirmPageDto
            {
              Amount = transaction.SendAmount,
              Fee = transaction.TransferFee,
              Total = transaction.TotalAmount,
              SenderBank = new BankDto
              {
                BankName = senderBank.BankName,
                AccountName = senderBank.AccountName,
                SortCode = senderBank.SortCode,
                AccountNumber = senderBank.AccountNumber,
                Reference = reference
              },
              BeneficiaryBank = new BankDto
              {
                BankName = beneficiaryBank.BankName,
                AccountName = beneficiaryBank.AccountName,
                SortCode = beneficiaryBank.SortCode,
                AccountNumber = beneficiaryBank.AccountNumber,
                Reference = reference
              }
            });
        }

        [Authorize]
        [HttpPost("{id}/confirm-payment")]
        public async Task<IActionResult> ConfirmPayment(int id)
        {
            var transaction = await _context.transactionHistories
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();
            //.FirstOrDefaultAsync(t => t.Id == id);

            if (transaction == null)
                return NotFound();

            if (transaction.Status != TransactionStatus.Pending)
                return BadRequest("Transaction not ready");

            var sender = await _context.UserBankAccountDetails
                .FirstAsync(b => b.UserId == transaction.UserId && b.IsDefault);

            if (sender.Balance < transaction.TotalAmount)
                return BadRequest("Insufficient balance");

            sender.Balance -= transaction.TotalAmount;

            transaction.Status = TransactionStatus.Completed;
            transaction.CompletedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return Ok("Payment successful");
        }

        [Authorize]
        [HttpPost("{id}/cancel-payment")]
        public async Task<IActionResult> CancelTransaction(int id)
        {
            var transaction = await _context.transactionHistories
                .Where(t => t.BeneficiaryId == id)
                .OrderByDescending(t => t.CreatedAt)
                .FirstOrDefaultAsync();
            //.FindAsync(id);

            if (transaction == null) return NotFound();

            if (transaction.Status == TransactionStatus.Completed)
                return BadRequest("Cannot cancel a completed transaction");

            transaction.Status = TransactionStatus.Cancelled;
            transaction.CompletedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return Ok("Transaction cancelled");
        }
    }
}
