using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class BeneficiaryAddressRepository : IBeneficiaryAddressRepository
    {
        private readonly ApplicationDBContext _context;
        public BeneficiaryAddressRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<BeneficiaryAddress?> CreateAsync(BeneficiaryAddress beneficiaryAddressModel)
        {
            await _context.BeneficiaryAddresses.AddAsync(beneficiaryAddressModel);
            await _context.SaveChangesAsync();
            return beneficiaryAddressModel;
        }

        public async Task<List<BeneficiaryAddress>> GetAllAsync()
        {
            return await _context.BeneficiaryAddresses.ToListAsync();
        }

        public async Task<List<BeneficiaryAddress>> GetByBeneficiaryIdAsync(int beneficiaryId)
        {
            return await _context.BeneficiaryAddresses
                .Where(a => a.BeneficiaryId == beneficiaryId)
                .ToListAsync();
        }

        public async Task<BeneficiaryAddress?> GetByIdAsync(int id)
        {
            return await _context.BeneficiaryAddresses
                .Include(a => a.Beneficiary)
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<List<BeneficiaryAddress>> GetByUserIdAsync(int id)
        {
            var beneficiaryAddress = await _context.BeneficiaryAddresses
            .Where(b => b.BeneficiaryId == id)
            .ToListAsync();

            return beneficiaryAddress;
        }

        public async Task<List<BeneficiaryAddress>> GetAllByUserIdAsync(string userId)
        {
            return await _context.BeneficiaryAddresses
                .Where(a => a.Beneficiary!.UserId == userId)
                .ToListAsync();
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }

        public async Task<BeneficiaryAddress?> UpdateAsync(int id, BeneficiaryAddress beneficiaryAddressModel)
        {
            _context.BeneficiaryAddresses.Update(beneficiaryAddressModel);
            await _context.SaveChangesAsync();
            return beneficiaryAddressModel;
        }
    }
}
