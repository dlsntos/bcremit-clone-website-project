using BCRemitClone2.Server.Dtos.BeneficiaryMobileWallet;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Mapper
{
    public static class BeneficiaryMobileWalletMappers
    {
        public static BeneficiaryMobileWalletDto ToBeneficiaryMobileWalletDto(this BeneficiaryMobileWallet beneficiaryMobileWalletModel) {
            return new BeneficiaryMobileWalletDto
            {
                Id = beneficiaryMobileWalletModel.Id,
                MobileWallet = beneficiaryMobileWalletModel?.MobileWallet,
                AccountNumber = beneficiaryMobileWalletModel?.AccountNumber,
                BeneficiaryId = beneficiaryMobileWalletModel?.BeneficiaryId,
            };
        }

        public static BeneficiaryMobileWallet ToCreateBeneficiaryMobileWalletDto(this CreateBeneficiaryMobileWalletDto beneficiaryMobileWalletDto, int beneficiaryId) 
        {
            return new BeneficiaryMobileWallet
            {
                MobileWallet = beneficiaryMobileWalletDto.MobileWallet,
                AccountNumber = beneficiaryMobileWalletDto.AccountNumber,
                BeneficiaryId = beneficiaryId
            };
        }

        public static BeneficiaryMobileWallet ToUpdateBeneficiaryMobileWalletDto(this UpdateBeneficiaryMobileWalletDto beneficiaryMobileWalletDto, int id) 
        {
            return new BeneficiaryMobileWallet
            {
                MobileWallet = beneficiaryMobileWalletDto.MobileWallet,
                AccountNumber = beneficiaryMobileWalletDto.AccountNumber,
            };
        }
    }
}
