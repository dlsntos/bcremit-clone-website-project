using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.Beneficiary
{
    public class CreateBeneficiaryDto
    {
        //public string BeneficiaryName { get; set; } = string.Empty;
        [Required]
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        [Required]
        public string LastName { get; set; } = string.Empty;
        public string? MobileNumber { get; set; } = string.Empty;

        [Required]
        public string Relationship { get; set; } = string.Empty;
        
    }
}
