using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Dtos.BeneficiaryMobileWallet
{
    public class BeneficiaryMobileWalletDto
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? MobileWallet { get; set; } = string.Empty;

        public string? AccountNumber { get; set; } = string.Empty;

        [Required]
        public int? BeneficiaryId { get; set; }

    }
}
