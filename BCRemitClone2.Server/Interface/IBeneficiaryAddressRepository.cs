using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace BCRemitClone2.Server.Interface
{
    public interface IBeneficiaryAddressRepository
    {
        Task<List<BeneficiaryAddress>> GetAllAsync();
        Task<BeneficiaryAddress?> GetByIdAsync(int id);
        Task<BeneficiaryAddress?> CreateAsync(BeneficiaryAddress beneficiaryAddressModel);
        Task<BeneficiaryAddress?> UpdateAsync(int id, BeneficiaryAddress beneficiaryAddressModel);
        Task<List<BeneficiaryAddress>> GetByBeneficiaryIdAsync(int beneficiaryId);
        Task<List<BeneficiaryAddress>> GetByUserIdAsync(int id);
        Task<List<BeneficiaryAddress>> GetAllByUserIdAsync(string userId);
        Task SaveChangesAsync();


    }
}
