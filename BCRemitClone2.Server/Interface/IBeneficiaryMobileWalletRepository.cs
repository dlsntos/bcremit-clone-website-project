using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IBeneficiaryMobileWalletRepository
    {
        Task<BeneficiaryMobileWallet?> GetByIdAsync(int id);
        Task<BeneficiaryMobileWallet?> CreateAsync(BeneficiaryMobileWallet beneficiaryMobileWalletModel);
        Task<BeneficiaryMobileWallet?> UpdateAsync(int id, BeneficiaryMobileWallet beneficiaryMobileWalletModel);
        Task<BeneficiaryMobileWallet?> GetByBeneficiaryIdAsync(int beneficiaryId);
        Task<List<BeneficiaryMobileWallet>> GetAllByUserIdAsync(string userId);
        Task SaveChangesAsync();
    }
}
