using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class BeneficiaryBankDetailsRepository : IBeneficiaryBankDetailsRepository
    {
        private readonly ApplicationDBContext _context;
        public BeneficiaryBankDetailsRepository (ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<BeneficiaryBank?> CreateAsync(BeneficiaryBank beneficiaryBankDetailsModel)
        {
            await _context.BeneficiaryBankDetails.AddAsync(beneficiaryBankDetailsModel);
            await _context.SaveChangesAsync();

            var bankAccounts = await _context.BeneficiaryBankAccounts
            .Where(b => b.BeneficiaryId == beneficiaryBankDetailsModel.BeneficiaryId)
            .ToListAsync();

            foreach (var account in bankAccounts)
            {
                account.BankName = beneficiaryBankDetailsModel.BankName!;
                account.AccountNumber = beneficiaryBankDetailsModel.BankNumber!;
            }

            await _context.SaveChangesAsync();
            
            return beneficiaryBankDetailsModel;
        }

        public async Task<List<BeneficiaryBank>> GetAllAsync()
        {
            return await _context.BeneficiaryBankDetails.ToListAsync();
        }

        public async Task<List<BeneficiaryBank>> GetAllByUserIdAsync(string userId)
        {
            return await _context.BeneficiaryBankDetails
                .Where(a => a.Beneficiary!.UserId == userId)
                .ToListAsync();
        }

        public async Task<BeneficiaryBank?> GetByBeneficiaryIdAsync(int beneficiaryId)
        {
            return await _context.BeneficiaryBankDetails
                .FirstOrDefaultAsync(a => a.BeneficiaryId == beneficiaryId);
        }

        public async Task<BeneficiaryBank?> GetByIdAsync(int id)
        {
            return await _context.BeneficiaryBankDetails
                .Include(a => a.Beneficiary)
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }


        public async Task<BeneficiaryBank?> UpdateAsync(int id, BeneficiaryBank beneficiaryBankDetailsModel)
        {   

            var existingBank = await _context.BeneficiaryBankDetails.FirstOrDefaultAsync(a => a.BeneficiaryId == id);

            if (existingBank == null)
                return null;

            existingBank.BankName = beneficiaryBankDetailsModel.BankName;
            existingBank.BankBranch = beneficiaryBankDetailsModel.BankBranch;
            existingBank.BankNumber = beneficiaryBankDetailsModel.BankNumber;

            await _context.SaveChangesAsync();

            return existingBank;
        }
    }
}
