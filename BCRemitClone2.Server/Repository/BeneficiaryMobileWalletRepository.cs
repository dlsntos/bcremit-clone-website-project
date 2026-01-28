using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace BCRemitClone2.Server.Repository
{
    public class BeneficiaryMobileWalletRepository: IBeneficiaryMobileWalletRepository
    {
        private readonly ApplicationDBContext _context;
        public BeneficiaryMobileWalletRepository(ApplicationDBContext context) {
            _context = context;
        }
        public async Task<BeneficiaryMobileWallet?> CreateAsync(BeneficiaryMobileWallet beneficiaryMobileWalletModel)
        {
            await _context.BeneficiaryMobileWalletDetails.AddAsync(beneficiaryMobileWalletModel);
            await _context.SaveChangesAsync();
            return beneficiaryMobileWalletModel;
        }

        public async Task<List<BeneficiaryMobileWallet>> GetAllByUserIdAsync(string userId)
        {
            return await _context.BeneficiaryMobileWalletDetails
                .Where(a => a.Beneficiary!.UserId == userId)
                .ToListAsync();
        }

        public async Task<BeneficiaryMobileWallet?> GetByBeneficiaryIdAsync(int beneficiaryId)
        {
            return await _context.BeneficiaryMobileWalletDetails
                .FirstOrDefaultAsync(a => a.BeneficiaryId == beneficiaryId);
        }

        public async Task<BeneficiaryMobileWallet?> GetByIdAsync(int id)
        {
            return await _context.BeneficiaryMobileWalletDetails
                        .Include(a => a.Beneficiary)
                        .FirstOrDefaultAsync(a => a.Id == id);
        }

        public Task SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        public async Task<BeneficiaryMobileWallet?> UpdateAsync(int id, BeneficiaryMobileWallet beneficiaryMobileWalletModel)
        {
            var existingMobileWallet = await _context.BeneficiaryMobileWalletDetails.FirstOrDefaultAsync(a => a.BeneficiaryId == id);

            if (existingMobileWallet == null)
                return null;

            existingMobileWallet.MobileWallet = beneficiaryMobileWalletModel.MobileWallet;
            existingMobileWallet.AccountNumber = beneficiaryMobileWalletModel.AccountNumber;

            await _context.SaveChangesAsync();

            return existingMobileWallet;
        }
    }
}
