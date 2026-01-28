using BCRemitClone2.Server.Dtos.User;
using BCRemitClone2.Server.Dtos.UserAddress;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/user/user-address")]
    [ApiController]
    public class UserAddressController : ControllerBase
    {
        private readonly IUserAddressRepository _userAddressRepo;
        public UserAddressController(IUserAddressRepository userAddressRepo) 
        {
            _userAddressRepo = userAddressRepo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var userAddress = await _userAddressRepo.GetAllAsync();
            var userAddressDto = userAddress.Select(s => s.ToUserAddressDto());
            return Ok(userAddressDto);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetById([FromRoute] string id)
        {
            var userAddress = await _userAddressRepo.GetByIdAsync(id);

            if (userAddress == null)
            {
                return NotFound();
            }
            return Ok(userAddress.ToUserAddressDto());
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create(CreateUserAddressDto userAddressDto )
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userId))
                return Unauthorized();

            var userAddressModel = userAddressDto.ToCreateUserAddressDto(userId);
            await _userAddressRepo.CreateAsync(userAddressModel);

            return CreatedAtAction(nameof(GetById), new { id = userAddressModel.AddressId }, userAddressModel.ToUserAddressDto());

        }

        //[HttpPut]
        //[Route("{id}")]

        //public async Task<IActionResult> Update([FromRoute] string id, [FromBody] UpdateUserRequestDto updateUserDto)
        //{
        //    var userModel = await _userRepo.UpdateAsync(id, updateUserDto);

        //    if (userModel == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(userModel.ToUserDto());
        //}
    }
}
