using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class UserBeneficiaryRepository : IUserBeneficiaryRepository
    {
        private readonly ApplicationDBContext _context;
        public UserBeneficiaryRepository(ApplicationDBContext context) {
            _context = context;
        }

        public Task<bool> BeneficiaryExists(int id)
        {
            return _context.Beneficiaries.AnyAsync(s => s.Id == id);
        }

        public async Task<Beneficiary> CreateAsync(Beneficiary beneficiaryModel)
        {
            await _context.Beneficiaries.AddAsync(beneficiaryModel);
            await _context.SaveChangesAsync();
            return beneficiaryModel; 
        }

        public async Task<Beneficiary?> DeleteAsync(int id)
        {
            var beneficiaryModel = await _context.Beneficiaries
                .Include(b => b.BeneficiaryAddresses)
                .Include(k => k.BeneficiaryBankDetails)
                .FirstOrDefaultAsync(i => i.Id == id);

            if (beneficiaryModel == null)
            {
                return null;
            }

            _context.BeneficiaryAddresses.RemoveRange(beneficiaryModel.BeneficiaryAddresses);

            _context.Beneficiaries.Remove(beneficiaryModel);
            await _context.SaveChangesAsync();

            return beneficiaryModel;
        }

        public async Task<List<Beneficiary>> GetAllAsync()
        {
            return await _context.Beneficiaries
                .Include(b => b.BeneficiaryAddresses)
                .Include(b => b.BeneficiaryBankDetails)
                .ToListAsync();
        }

        public async Task<Beneficiary?> GetByIdAsync(string userId, int id)
        {
            return await _context.Beneficiaries
                .Where(b => b.Id == id && b.UserId == userId)
                .Include(b => b.BeneficiaryAddresses)
                .Include(b => b.BeneficiaryBankDetails)
                .FirstOrDefaultAsync();
        }

        public async Task<List<Beneficiary>> GetByUserIdAsync(string userId)
        {
            var beneficiaries = await _context.Beneficiaries
            .Where(b => b.UserId == userId)
            .Include(b => b.BeneficiaryAddresses)
            .Include(b => b.BeneficiaryBankDetails)
            .ToListAsync();

            return beneficiaries;
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<Beneficiary?> UpdateAsync(int id, Beneficiary beneficiaryModel)
        {
            _context.Beneficiaries.Update(beneficiaryModel);
            await _context.SaveChangesAsync();
            return beneficiaryModel;
            //var existingBeneficiary = await _context.Beneficiaries.FindAsync(id);

            //if (existingBeneficiary == null)
            //{
            //    return null;
            //}

            //existingBeneficiary.FirstName = beneficiaryModel.FirstName;
            //existingBeneficiary.MiddleName = beneficiaryModel.MiddleName;
            //existingBeneficiary.LastName = beneficiaryModel.LastName;
            //existingBeneficiary.MobileNumber = beneficiaryModel.MobileNumber;
            //existingBeneficiary.Relationship = beneficiaryModel.Relationship;

            //await _context.SaveChangesAsync();

            //return existingBeneficiary;
        }
    }
}
