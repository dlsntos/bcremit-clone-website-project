using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Dtos.User;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Mapper;
using BCRemitClone2.Server.Models;
using BCRemitClone2.Server.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Security.Claims;
namespace BCRemitClone2.Server.Controllers
{
    [Route("api/v1/user")]  
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly UserManager<User> _userManager;
        private readonly ITokenService _tokenService;
        private readonly ApplicationDBContext _context;
        private readonly IUserRepository _userRepo;
        private readonly SignInManager<User> _signInManager;
        private readonly CustomIdGenerator _idGenerator;

        public UserController(
            UserManager<User> userManager, 
            ITokenService tokenService, 
            ApplicationDBContext context, 
            IUserRepository userRepo,
            SignInManager<User> signinManager,
            CustomIdGenerator idGenerator
        )
        {
            _context = context;
            _signInManager = signinManager;
            _tokenService = tokenService;
            _userManager = userManager;
            _userRepo = userRepo;
            _idGenerator = idGenerator;
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto) 
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == loginDto.Email.ToLower());

            if (user == null)
                return Unauthorized("Invalid Email");
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded)
                return Unauthorized("Email not found and/or password incorrect");

            return Ok(
                    new LoginResponseDto
                    {   
                        Email = loginDto.Email,
                        Token = _tokenService.CreateToken(user)
                    }
                );
        }


        [HttpPost("register")]

        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var customId = await _idGenerator.GenerateNewUserIdAsync();

                var user = new User
                {
                    Id = customId,
                    UserName = registerDto.Email,
                    Email = registerDto.Email,
                    Country = registerDto.Country,
                    DialCode = registerDto.DialCode,
                    PhoneNumber = registerDto.PhoneNumber,
                };

                var createdUser = await _userManager.CreateAsync(user, registerDto.Password!);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(user, "User");
                    if (roleResult.Succeeded)
                    {
                        return Ok(
                            new NewUserDto
                            {
                                //UserName = user.UserName,
                                UserId = user.Id,
                                Email = registerDto.Email,
                                Country = registerDto.Country,
                                DialCode = registerDto.DialCode,
                                PhoneNumber = registerDto.PhoneNumber,
                                Token = _tokenService.CreateToken(user)
                            }   
                        );
                    }
                    else
                    {
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e) {
                Console.WriteLine(e);
                return StatusCode(500, "An unexpected error occurred.");
            }
        }
        

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _userRepo.GetAllAsync();
            
            var userDto = users.Select(s => s.ToUserDto());
            
            return Ok(userDto);
             
        }

        [Authorize]
        [HttpGet("me")]

        public async Task<IActionResult> GetById()
        {
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
                return Unauthorized();

            var user = await _userRepo.GetByIdAsync(userId);
            if (user == null)
                return NotFound();

            return Ok(user.ToUserDto());
        }
        
        [HttpPut]
        [Route("{id}")]

        public async Task<IActionResult> Update([FromRoute] string id, [FromBody] UpdateUserRequestDto updateUserDto)
        {
            var userModel = await _userRepo.UpdateAsync(id, updateUserDto);

            if (userModel == null) {
                return NotFound();
            }

            return Ok(userModel.ToUserDto());
        }

        [HttpDelete]
        [Route("{id}")]

        public async Task<IActionResult> Delete([FromRoute] string id) {

            var userModel = await _userRepo.DeleteAsync(id);

            if (userModel == null) 
            {
                return NotFound();
            }
                
            return NoContent();
        }

    
    }

}
