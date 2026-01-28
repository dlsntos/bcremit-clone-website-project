using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.BeneficiaryMobileWallet
{
    public class UpdateBeneficiaryMobileWalletDto
    {
        public string? MobileWallet { get; set; } = string.Empty;

        public string? AccountNumber { get; set; } = string.Empty;
    }
}
