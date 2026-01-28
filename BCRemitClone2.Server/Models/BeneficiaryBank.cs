using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Models
{
    public class BeneficiaryBank
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string? BankName { get; set; } = string.Empty;

        public string? BankBranch { get; set; } = string.Empty;

        public string? BankNumber { get; set; } = string.Empty;

        [Required]
        public int? BeneficiaryId { get; set; }

        [ForeignKey(nameof(BeneficiaryId))]
        public Beneficiary? Beneficiary { get; set; }
    }
}
