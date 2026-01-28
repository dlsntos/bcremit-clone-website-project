using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Interface
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
