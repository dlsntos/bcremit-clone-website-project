using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/user/beneficiaries")]
    [ApiController]
    public class UserBeneficiaryController : ControllerBase
    {
        private readonly IUserBeneficiaryRepository _beneficiaryRepo;
        private readonly IUserRepository _userRepo;
        private readonly UserManager<User> _userManager;

        public UserBeneficiaryController(IUserBeneficiaryRepository beneficiaryRepo, IUserRepository userRepo, UserManager<User> userManager)
        {
            _beneficiaryRepo = beneficiaryRepo;
            _userRepo = userRepo;
            _userManager = userManager;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var beneficiary = await _beneficiaryRepo.GetAllAsync();
            var beneficiaryDto = beneficiary.Select(s => s.ToBeneficiaryDto());

            return Ok(beneficiaryDto);
        }

        [Authorize]
        [HttpGet]
        [Route("me/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier); 
            var beneficiary = await _beneficiaryRepo.GetByIdAsync(userId!, id);

            if (beneficiary == null)
                return NotFound("Beneficiary Not Found"); 
            return Ok(beneficiary.ToBeneficiaryDto());
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<ActionResult<List<BeneficiaryDto>>> GetByUserId()
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value
                 ?? User.FindFirst("sub")?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var result = await _beneficiaryRepo.GetByUserIdAsync(userId);

            var beneficiaryDto = result.Select(b => b.ToBeneficiaryDto()).ToList();
            
            return Ok(beneficiaryDto);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create(CreateBeneficiaryDto beneficiaryDto)
        {

            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            if (!await _userRepo.UserExists(userId)) {
                return BadRequest("User Does not exist");
            }

            var beneficiaryModel = beneficiaryDto.ToCreateBeneficiaryDto(userId);
            await _beneficiaryRepo.CreateAsync(beneficiaryModel);

            return CreatedAtAction(nameof(GetById), new { id = beneficiaryModel.Id }, beneficiaryModel.ToBeneficiaryDto());
        }

        [Authorize]
        [HttpPatch("me/{id}")]
        public async Task<IActionResult> UpdateBeneficiary(int id, [FromBody] JsonPatchDocument<UpdateBeneficiaryDto> patchDoc)
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value
                 ?? User.FindFirst("sub")?.Value;

            if (patchDoc == null)
                return BadRequest();

            var beneficiary = await _beneficiaryRepo.GetByIdAsync(userId!,id);

            if (beneficiary == null)
                return NotFound();

            var beneficiaryDto = beneficiary.ToUpdateBeneficiaryDto();

            patchDoc.ApplyTo(beneficiaryDto, ModelState);

            if (!ModelState.IsValid)
                return ValidationProblem(ModelState);

            beneficiaryDto.ApplyUpdate(beneficiary);
            await _beneficiaryRepo.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {

            var beneficiaryModel = await _beneficiaryRepo.DeleteAsync(id);

            if (beneficiaryModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
