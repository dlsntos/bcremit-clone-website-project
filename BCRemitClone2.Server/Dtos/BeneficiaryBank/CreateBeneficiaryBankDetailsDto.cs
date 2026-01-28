using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Dtos.BeneficiaryBankDetails
{
    public class CreateBeneficiaryBankDetailsDto
    {

        public string? BankName { get; set; } = string.Empty;

        public string? BankBranch { get; set; } = string.Empty;

        public string? BankNumber { get; set; } = string.Empty;

    }
}
