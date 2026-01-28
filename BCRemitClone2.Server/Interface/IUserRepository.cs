using BCRemitClone2.Server.Dtos.User;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllAsync();
        Task<User?> GetByIdAsync(string id);
        Task<User> CreateAsync(User userModel);
        Task<User?> UpdateAsync(string id, UpdateUserRequestDto userDto);
        Task<User?> DeleteAsync(string id);
        Task<bool> UserExists(string id);
    }
}
