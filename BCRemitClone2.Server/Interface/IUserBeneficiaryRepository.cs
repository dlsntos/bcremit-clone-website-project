using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IUserBeneficiaryRepository
    {
        Task<List<Beneficiary>> GetAllAsync();
        Task<Beneficiary?> DeleteAsync(int id);
        Task<Beneficiary?> GetByIdAsync(string userId, int id);
        Task<List<Beneficiary>> GetByUserIdAsync(string userId);
        Task<Beneficiary> CreateAsync(Beneficiary beneficiaryModel);
        Task<Beneficiary?> UpdateAsync(int id, Beneficiary beneficiaryModel );
        Task SaveChangesAsync();
        Task<bool> BeneficiaryExists(int id);

    }
}
