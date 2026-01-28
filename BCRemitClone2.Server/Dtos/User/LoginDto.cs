using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.User
{
    public class LoginDto
    {
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Password { get; set; }
    }
}
