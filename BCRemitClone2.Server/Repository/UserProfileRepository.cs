using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDBContext _context;
        public UserProfileRepository(ApplicationDBContext context) 
        {
            _context = context;
        }
        public async Task<UserProfile> CreateAsync(UserProfile userInformationModel)
        {
            await _context.UserProfile.AddAsync(userInformationModel);
            await _context.SaveChangesAsync();
            return userInformationModel;
        }

        public async Task<List<UserProfile>> GetAllAsync()
        {
            return await _context.UserProfile.ToListAsync();
        }

        public async Task<UserProfile?> GetByIDAsync(string id)
        {
            return await _context.UserProfile.FirstOrDefaultAsync(u => u.UserId == id);
            ;
        }
    }
}
