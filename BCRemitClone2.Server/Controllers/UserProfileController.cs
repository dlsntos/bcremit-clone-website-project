using BCRemitClone2.Server.Dtos.UserInfo;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/user/user-information")]
    [ApiController]
    public class UserProfileController: ControllerBase
    {
        private readonly IUserRepository _userRepo;
        private readonly IUserProfileRepository _userInformationRepo;
        public UserProfileController(IUserProfileRepository userInformationRepo,IUserRepository userRepo)
        {
            _userRepo = userRepo;
            _userInformationRepo = userInformationRepo;
        }

        [Authorize]
        [HttpGet]

        public async Task<IActionResult> GetAll()
        {
            var userInformation = await _userInformationRepo.GetAllAsync();
            var userInformationDto = userInformation.Select(s => s.ToUserInformationDto());

            return Ok(userInformationDto);
        }

        [Authorize]
        [HttpGet("me")]
        //[Route("{id}")]
        //[FromRoute] string id
        public async Task<IActionResult> GetById()
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value
                 ?? User.FindFirst("sub")?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var userInformation = await _userInformationRepo.GetByIDAsync(userId);

            if(userInformation == null)
            {
                return NotFound();
            }

            return Ok(userInformation.ToUserInformationDto());

        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create(CreateUserInformationDto userInformationDto)
        {

            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var userInformationModel = userInformationDto.ToCreateUserInformationDto(userId);
            await _userInformationRepo.CreateAsync(userInformationModel);

            return CreatedAtAction(nameof(GetById), new { id = userInformationModel.profileID}, userInformationModel.ToUserInformationDto());
        }

    }
}
