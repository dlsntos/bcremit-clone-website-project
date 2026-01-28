using BCRemitClone2.Server.Dtos.UserAddress;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Mapper
{
    public static class UserAddressMappers
    {
        public static UserAddressDto ToUserAddressDto(this UserAddress userAddress) {
            return new UserAddressDto()
            {
                AddressId = userAddress.AddressId,
                AddressLineOne = userAddress.AddressLineOne,
                AddressLineTwo = userAddress.AddressLineTwo,
                CityOrTown = userAddress.CityOrTown,
                PostCode = userAddress.PostCode,
                UserId = userAddress.UserId,
                
            };
        }

        public static UserAddress ToCreateUserAddressDto(this CreateUserAddressDto userAddressDto, string userId) {

            return new UserAddress()
            {
                AddressLineOne = userAddressDto.AddressLineOne,
                AddressLineTwo = userAddressDto.AddressLineTwo,
                CityOrTown = userAddressDto.CityOrTown,
                PostCode = userAddressDto.PostCode,
                UserId = userId,
            };
        
        }
    }
}
