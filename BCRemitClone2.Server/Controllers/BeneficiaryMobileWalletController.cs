using BCRemitClone2.Server.Dtos.BeneficiaryAddress;
using BCRemitClone2.Server.Dtos.BeneficiaryMobileWallet;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/beneficiaries/mobile-wallet")]
    [ApiController]
    public class BeneficiaryMobileWalletController : ControllerBase
    {

        private readonly IBeneficiaryMobileWalletRepository _beneficiaryMobileWalletRepo;
        private readonly IUserBeneficiaryRepository _beneficiaryRepo;
        public BeneficiaryMobileWalletController(IBeneficiaryMobileWalletRepository beneficiaryMobileWalletRepo, IUserBeneficiaryRepository beneficiaryRepo) { 
            _beneficiaryMobileWalletRepo = beneficiaryMobileWalletRepo;
            _beneficiaryRepo = beneficiaryRepo;
        }

        [Authorize]
        [HttpGet("{id}", Name = "GetBeneficiaryMobileWalletById")]
        
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var beneficiaryMobileWallet = await _beneficiaryMobileWalletRepo.GetByIdAsync(id);

            if (beneficiaryMobileWallet == null || beneficiaryMobileWallet.Beneficiary!.UserId != userId)
            {
                return NotFound();
            }

            return Ok(beneficiaryMobileWallet.ToBeneficiaryMobileWalletDto());
        }

        [HttpGet("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> GetByBeneficiaryId([FromRoute] int beneficiaryId)
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return NotFound("Beneficiary not found");
            }

            var mobileWallet = await _beneficiaryMobileWalletRepo.GetByBeneficiaryIdAsync(beneficiaryId);

            if (mobileWallet == null)
                return NotFound();

            return Ok(mobileWallet.ToBeneficiaryMobileWalletDto());
        }

        [Authorize]
        [HttpGet("me/mobile-wallets")]
        public async Task<ActionResult<List<BeneficiaryMobileWalletDto>>> GetMyBeneficiaryMobileWallet()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                      ?? User.FindFirst("sub")?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var addresses = await _beneficiaryMobileWalletRepo
                .GetAllByUserIdAsync(userId);

            return Ok(addresses);
        }

        [Authorize]
        [HttpPost("beneficiary/{beneficiaryId}")]

        public async Task<IActionResult> Create([FromRoute] int beneficiaryId, [FromBody] CreateBeneficiaryMobileWalletDto beneficiaryMobileWalletDto)
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return BadRequest("Beneficiary Does not exists");
            }

            var beneficiaryMobileWalletModel = beneficiaryMobileWalletDto.ToCreateBeneficiaryMobileWalletDto(beneficiaryId);
            await _beneficiaryMobileWalletRepo.CreateAsync(beneficiaryMobileWalletModel);

            return CreatedAtRoute("GetBeneficiaryMobileWalletById", new { id = beneficiaryMobileWalletModel.Id }, beneficiaryMobileWalletModel.ToBeneficiaryMobileWalletDto());
        }

        [Authorize]
        [HttpPut("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> Update([FromRoute] int beneficiaryId, [FromBody] UpdateBeneficiaryMobileWalletDto beneficiaryMobileWalletDto)
        {
            var beneficiaryMobileWallet = await _beneficiaryMobileWalletRepo.UpdateAsync(beneficiaryId, beneficiaryMobileWalletDto.ToUpdateBeneficiaryMobileWalletDto(beneficiaryId));

            if (beneficiaryMobileWallet == null)
            {
                return NotFound();
            }

            return Ok(beneficiaryMobileWallet.ToBeneficiaryMobileWalletDto());
        }
    }
}
