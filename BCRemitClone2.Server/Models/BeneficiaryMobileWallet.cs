using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Models
{
    public class BeneficiaryMobileWallet
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? MobileWallet { get; set; } = string.Empty;
        public string? AccountNumber { get; set; } = string.Empty;
        [Required]
        public int? BeneficiaryId { get; set; }
        [ForeignKey(nameof(BeneficiaryId))]
        public Beneficiary? Beneficiary { get; set; }
    }
}
