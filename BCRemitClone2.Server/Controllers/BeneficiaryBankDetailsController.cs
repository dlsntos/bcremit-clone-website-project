using BCRemitClone2.Server.Dtos.BeneficiaryAddress;
using BCRemitClone2.Server.Dtos.BeneficiaryBank;
using BCRemitClone2.Server.Dtos.BeneficiaryBankDetails;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/beneficiaries/bank-details")]
    [ApiController]
    public class BeneficiaryBankDetailsController: ControllerBase
    {
        private readonly IBeneficiaryBankDetailsRepository _beneficiaryBankDetailsRepo;
        private readonly IUserBeneficiaryRepository _beneficiaryRepo;
        public BeneficiaryBankDetailsController(IBeneficiaryBankDetailsRepository beneficiaryBankDetailsRepo, IUserBeneficiaryRepository beneficiaryRepo) 
        {
            _beneficiaryBankDetailsRepo = beneficiaryBankDetailsRepo;
            _beneficiaryRepo = beneficiaryRepo;
        }


        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetAllAsync()
        {
            var beneficiaryBankDetails = await _beneficiaryBankDetailsRepo.GetAllAsync();
            var beneficiaryBankDetailsDto = beneficiaryBankDetails.Select(s => s.ToBeneficiaryBankDetailsDto());
            return Ok(beneficiaryBankDetailsDto);
        }

        [Authorize]
        [HttpGet("{id}", Name = "GetBeneficiaryBankDetailsById")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var beneficiaryBankDetails = await _beneficiaryBankDetailsRepo.GetByIdAsync(id);

            if (beneficiaryBankDetails == null || beneficiaryBankDetails.Beneficiary!.UserId != userId)
            {
                return NotFound();
            }

            return Ok(beneficiaryBankDetails.ToBeneficiaryBankDetailsDto());
        }
        [Authorize]
        [HttpGet("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> GetByBeneficiaryId([FromRoute] int beneficiaryId)
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return NotFound("Beneficiary not found");
            }

            var bank = await _beneficiaryBankDetailsRepo.GetByBeneficiaryIdAsync(beneficiaryId);

            if (bank == null)
                return NotFound();

            return Ok(bank.ToBeneficiaryBankDetailsDto());
        }

        [Authorize]
        [HttpGet("me/banks")]
        public async Task<ActionResult<List<BeneficiaryBankDetailsDto>>> GetMyBeneficiaryBanks()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                      ?? User.FindFirst("sub")?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var addresses = await _beneficiaryBankDetailsRepo
                .GetAllByUserIdAsync(userId);

            return Ok(addresses);
        }

        [Authorize]
        [HttpPost("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> Create([FromRoute] int beneficiaryId, [FromBody] CreateBeneficiaryBankDetailsDto beneficiaryBankDetailsDto)
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return BadRequest("Beneficiary Does not exists");
            }

            var beneficiaryBankDetailsModel = beneficiaryBankDetailsDto.ToCreateBeneficiaryBankDetailsDto(beneficiaryId);
            await _beneficiaryBankDetailsRepo.CreateAsync(beneficiaryBankDetailsModel);

            return CreatedAtRoute("GetBeneficiaryAddressById", new { id = beneficiaryBankDetailsModel.Id }, beneficiaryBankDetailsModel.ToBeneficiaryBankDetailsDto());
        }

        [Authorize]
        [HttpPut("beneficiary/{beneficiaryId}")]

        public async Task<IActionResult> Update([FromRoute] int beneficiaryId, [FromBody] UpdateBeneficiaryBankDetailsDto beneficiaryBankDetailsDto) 
        {
            var beneficiaryBank = await _beneficiaryBankDetailsRepo.UpdateAsync(beneficiaryId, beneficiaryBankDetailsDto.ToUpdateBeneficiaryDetailsDto(beneficiaryId));

            if (beneficiaryBank == null)
            {
                return NotFound();
            }

            return Ok(beneficiaryBank.ToBeneficiaryBankDetailsDto());
        }
    }
}
