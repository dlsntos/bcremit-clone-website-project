using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IBeneficiaryBankDetailsRepository
    {
        Task<List<BeneficiaryBank>> GetAllAsync();
        Task<BeneficiaryBank?> GetByIdAsync(int id);
        Task<BeneficiaryBank?> CreateAsync(BeneficiaryBank beneficiaryBankDetailsModel);
        Task<BeneficiaryBank?> UpdateAsync(int id, BeneficiaryBank beneficiaryBankDetailsModel);
        Task<BeneficiaryBank?> GetByBeneficiaryIdAsync(int beneficiaryId);
        Task<List<BeneficiaryBank>> GetAllByUserIdAsync(string userId);
        Task SaveChangesAsync();
    }
}
