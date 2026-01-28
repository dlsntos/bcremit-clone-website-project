using BCRemitClone2.Server.Data;
using BCRemitClone2.Server.Interface;
using BCRemitClone2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Repository
{
    public class UserAddressRepository: IUserAddressRepository
    {
        readonly ApplicationDBContext _context;
        public UserAddressRepository(ApplicationDBContext context) {
            _context = context;
        }

        public async Task<UserAddress> CreateAsync(UserAddress userAddressModel)
        {
            await _context.UserAddress.AddAsync(userAddressModel);
            await _context.SaveChangesAsync();
            return userAddressModel;
        }

        public async Task<List<UserAddress>> GetAllAsync()
        {
            return await _context.UserAddress.ToListAsync();
        }
        
        public async Task<UserAddress?> GetByIdAsync(string id)
        {
            return await _context.UserAddress.FindAsync(id);
        }
    }
}
