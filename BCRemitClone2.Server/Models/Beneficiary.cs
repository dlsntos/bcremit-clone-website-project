using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Models
{
    public class Beneficiary
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        [Required]
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        
        [Required]
        public string LastName { get; set; } = string.Empty;
        public string? MobileNumber { get; set; } = string.Empty;
        
        [Required]
        public string Relationship { get; set; } = string.Empty;

        [Required]
        public List<BeneficiaryAddress> BeneficiaryAddresses { get; set; } = new List<BeneficiaryAddress>();

        [Required]
        public List<BeneficiaryBank> BeneficiaryBankDetails { get; set; } = new List<BeneficiaryBank>();
        [Required]
        public string UserId { get; set; } = default!;
        public User? User { get; set; }


    }
}
