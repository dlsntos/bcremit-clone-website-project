using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IUserAddressRepository
    {
        Task<List<UserAddress>> GetAllAsync();
        Task<UserAddress?> GetByIdAsync(string id);
        Task<UserAddress> CreateAsync(UserAddress userAddress);
    }
}
