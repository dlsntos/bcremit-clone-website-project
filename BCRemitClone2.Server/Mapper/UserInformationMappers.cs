using BCRemitClone2.Server.Models;
using BCRemitClone2.Server.Dtos.UserInfo;

namespace BCRemitClone2.Server.Mapper
{
    public static class UserInformationMappers
    {
        public static UserInformationDto ToUserInformationDto(this UserProfile userInformationModel) 
        {
            return new UserInformationDto
            {
                profileID = userInformationModel.profileID,
                FirstName = userInformationModel.FirstName,
                MiddleName = userInformationModel.MiddleName,
                LastName = userInformationModel.LastName,
                BirthDate = userInformationModel.BirthDate,
                SourceOfFunds = userInformationModel.SourceOfFunds,
                UserId = userInformationModel.UserId,
            };
        }

        public static UserProfile ToCreateUserInformationDto(this CreateUserInformationDto userInformationDto, string userId) 
        {
            return new UserProfile
            { 
                FirstName = userInformationDto.FirstName,
                MiddleName = userInformationDto.MiddleName,
                LastName = userInformationDto.LastName,
                BirthDate = userInformationDto.BirthDate,
                SourceOfFunds = userInformationDto.SourceOfFunds,
                UserId = userId,
            };
        }
    }
}
