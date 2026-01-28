using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Dtos.BeneficiaryMobileWallet
{
    public class CreateBeneficiaryMobileWalletDto
    {
        public string? MobileWallet { get; set; } = string.Empty;

        public string? AccountNumber { get; set; } = string.Empty;
    }
}
