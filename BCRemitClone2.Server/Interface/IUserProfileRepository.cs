using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface IUserProfileRepository
    {
        public Task<List<UserProfile>> GetAllAsync();
        public Task<UserProfile?> GetByIDAsync(string id);
        public Task<UserProfile> CreateAsync(UserProfile userInformationModel);
    }
}
