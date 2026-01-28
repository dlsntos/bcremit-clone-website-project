using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.BeneficiaryBank
{
    public class UpdateBeneficiaryBankDetailsDto
    {
        public string? BankName { get; set; } = string.Empty;

        public string? BankBranch { get; set; } = string.Empty;

        public string? BankNumber { get; set; } = string.Empty;
    }
}
