using BCRemitClone2.Server.Dtos.User;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Mapper
{
    public static class UserMappers
    {
        public static UserDto ToUserDto(this User userModel) 
        {
            return new UserDto
            {   
                Id = userModel.Id,
                Country = userModel.Country,
                UserName = userModel.UserName,
                Email = userModel.Email,
                DialCode = userModel.DialCode,
                PhoneNumber = userModel.PhoneNumber,
                UserInformation = userModel.UserInformation.Select(i => i.ToUserInformationDto()).ToList(),
                Address = userModel.Address.Select(e => e.ToUserAddressDto()).ToList(),
                Beneficiaries = userModel.Beneficiaries.Select(c => c.ToBeneficiaryDto()).ToList(),
            };
        
        }
    }

}
