using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Dtos.UserAddress;
using BCRemitClone2.Server.Dtos.UserInfo;
using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.User
{
    public class RegisterDto
    {

        [Required]
        public string Country { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string? Email { get; set; } = string.Empty;

        [Required]
        public string? Password { get; set; } = string.Empty;

        [Required, MaxLength(5)]
        public string DialCode { get; set; } = string.Empty;

        [Phone, MaxLength(15)]
        public string? PhoneNumber { get; set; }


        //[Required]
        //public string? UserName { get; set; } = string.Empty;
        //public required List<UserInformationDto> UserInformation { get; set; }
        //public required List<UserAddressDto> Address { get; set; }
        //public required List<BeneficiaryDto> Beneficiaries { get; set; }
    }
}
