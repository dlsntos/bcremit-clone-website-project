using BCRemitClone2.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace BCRemitClone2.Server.Service
{
    public class CustomIdGenerator
    {
        private readonly ApplicationDBContext _config;
        public CustomIdGenerator(ApplicationDBContext config) { 
            _config = config;
        }

        public async Task<string> GenerateNewUserIdAsync()
        {
            var lastUserId = await _config.Users
                .Where(u => u.Id.StartsWith("BC"))
                .OrderByDescending(u => u.Id)
                .Select(u => u.Id)
                .FirstOrDefaultAsync();

            int nextIdNumber = 1;

            if (!string.IsNullOrEmpty(lastUserId))
            { 
                string numericPart = lastUserId.Substring(2);
                nextIdNumber = int.Parse(numericPart) + 1;
            }

            return $"BC{nextIdNumber.ToString("D6")}";
        }
    }
}
