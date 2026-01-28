using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Models
{
    public class User : IdentityUser
    {
        public override string Id { get; set; } = null!;
        [Required]
        public string Country { get; set; } = string.Empty;
        [Required, MaxLength(5)]
        public string DialCode { get; set; } = string.Empty;
        [Phone, MaxLength(15)]
        public override string? PhoneNumber { get; set; }
        public List<UserProfile> UserInformation { get; set; } = new List<UserProfile>();
        public List<UserAddress> Address { get; set; } = new List<UserAddress>();   
        public List<Beneficiary> Beneficiaries { get; set; } = new List<Beneficiary>();

    }
}
