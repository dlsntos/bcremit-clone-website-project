using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Dtos.BeneficiaryAddress;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/beneficiaries/address")]
    [ApiController]
    public class BeneficiaryAddressController : ControllerBase
    {
        private readonly IBeneficiaryAddressRepository _beneficiaryAddressRepo;
        private readonly IUserBeneficiaryRepository _beneficiaryRepo;
        public BeneficiaryAddressController(IBeneficiaryAddressRepository beneficiaryAddressRepo, IUserBeneficiaryRepository beneficiaryRepo)
        {
            _beneficiaryRepo = beneficiaryRepo;
            _beneficiaryAddressRepo = beneficiaryAddressRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var beneficiaryAddress = await _beneficiaryAddressRepo.GetAllAsync();
            var beneficiaryAddressDto = beneficiaryAddress.Select(s => s.ToBeneficiaryAddressDto());
            return Ok(beneficiaryAddressDto);
        }

        [Authorize]
        [HttpGet("{id}", Name = "GetBeneficiaryAddressById")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var beneficiaryAddress = await _beneficiaryAddressRepo.GetByIdAsync(id);

            if (beneficiaryAddress == null || beneficiaryAddress.Beneficiary!.UserId != userId)
            {
                return NotFound();
            }

            return Ok(beneficiaryAddress.ToBeneficiaryAddressDto());
        }

        [HttpGet("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> GetByBeneficiaryId([FromRoute] int beneficiaryId)
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return NotFound("Beneficiary not found");
            }

            var addresses = await _beneficiaryAddressRepo.GetByBeneficiaryIdAsync(beneficiaryId);

            if (addresses == null || addresses.Count == 0)
                return NotFound("No addresses found for this beneficiary");

            var addressDto = addresses.Select(a => a.ToBeneficiaryAddressDto()).ToList();
            return Ok(addressDto);
        }

        [Authorize]
        [HttpGet("me/addresses")]
        public async Task<ActionResult<List<BeneficiaryAddressDto>>> GetMyBeneficiaryAddresses()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value
                      ?? User.FindFirst("sub")?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var addresses = await _beneficiaryAddressRepo
                .GetAllByUserIdAsync(userId);

            return Ok(addresses);
        }


        [Authorize]
        [HttpPost("beneficiary/{beneficiaryId}")]
        public async Task<IActionResult> Create([FromRoute] int beneficiaryId, [FromBody] CreateBeneficiaryAddressDto beneficiaryAddressDto) 
        {
            if (!await _beneficiaryRepo.BeneficiaryExists(beneficiaryId))
            {
                return BadRequest("Beneficiary Does not exists");
            }

            var beneficiaryAddressModel = beneficiaryAddressDto.ToCreateBeneficiaryAddressDto(beneficiaryId);
            await _beneficiaryAddressRepo.CreateAsync(beneficiaryAddressModel);

            return CreatedAtRoute("GetBeneficiaryAddressById", new { id = beneficiaryAddressModel.Id }, beneficiaryAddressModel.ToBeneficiaryAddressDto());
        }

        [Authorize]
        [HttpPatch("beneficiary/{id}")]

        public async Task<IActionResult> UpdateBeneficiaryAddress(int id, JsonPatchDocument<UpdateBeneficiaryAddressDto> patchDoc) 
        {
            if (patchDoc == null)
                return BadRequest();

            var beneficiaryAddress = await _beneficiaryAddressRepo.GetByIdAsync(id);

            if (beneficiaryAddress == null)
                return NotFound();

            var beneficiaryAddressDto = beneficiaryAddress.ToUpdateBeneficiaryAddressDto();

            patchDoc.ApplyTo(beneficiaryAddressDto, ModelState);

            if (!ModelState.IsValid)
                return ValidationProblem(ModelState);

            beneficiaryAddressDto.ApplyUpdate(beneficiaryAddress);
            await _beneficiaryRepo.SaveChangesAsync();

            return NoContent();
        }
    }
}
