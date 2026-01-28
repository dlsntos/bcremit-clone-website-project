using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Dtos.User;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<User> _userManager;
        public UserRepository(ApplicationDBContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<User> CreateAsync(User userModel)
        {
            await _context.Users.AddAsync(userModel);
            await _context.SaveChangesAsync();

            return userModel;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await _userManager.Users
                .Include(u => u.UserInformation)
                .Include(b => b.Beneficiaries)
                    .ThenInclude(b => b.BeneficiaryAddresses)
                .Include(b => b.Beneficiaries)
                    .ThenInclude(b => b.BeneficiaryBankDetails)
                .Include(a => a.Address)
                .ToListAsync();
        }

        
        public async Task<User?> DeleteAsync(string id)
        {
            var userModel = await _userManager.Users.FirstOrDefaultAsync(i => i.Id == id);

            if (userModel == null) {
                return null;
            }

            _context.Users.Remove(userModel);
            await _context.SaveChangesAsync();

            return userModel;

        }

        public async Task<User?> GetByIdAsync(string id) { 
            
            return await _userManager.Users
                .Include(u => u.UserInformation)
                .Include(b => b.Beneficiaries)
                    .ThenInclude(b => b.BeneficiaryAddresses)
                .Include(a => a.Address)
                .FirstOrDefaultAsync(i => i.Id == id);

        }

        public async Task<User?> UpdateAsync(string id, UpdateUserRequestDto userDto)
        {   
            var existingUser = await _userManager.Users.FirstOrDefaultAsync(i => i.Id == id);

            if (existingUser == null) 
            {
                return null;
            }
            existingUser.PhoneNumber = userDto.PhoneNumber;

            return existingUser;
        }

        public async Task<bool> UserExists(string id)
        {
            var user = await _userManager.FindByIdAsync(id);
            return user != null;
        }
        
    }
}
