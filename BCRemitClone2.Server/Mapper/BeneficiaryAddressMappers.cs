using BCRemitClone2.Server.Dtos.BeneficiaryAddress;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Mapper
{
    public static class BeneficiaryAddressMappers
    {
        public static BeneficiaryAddressDto ToBeneficiaryAddressDto(this BeneficiaryAddress beneficiaryAddress) 
        {
            return new BeneficiaryAddressDto
            {
                Id = beneficiaryAddress.Id,
                Country = beneficiaryAddress.Country,
                AddressLineOne = beneficiaryAddress.AddressLineOne,
                AddressLineTwo = beneficiaryAddress.AddressLineTwo,
                CityOrTown = beneficiaryAddress.CityOrTown,
                ZipCode = beneficiaryAddress.ZipCode,
                DeliveryOption = beneficiaryAddress.DeliveryOption,
                BeneficiaryId = beneficiaryAddress?.BeneficiaryId,
            };    
        }

        public static BeneficiaryAddress ToCreateBeneficiaryAddressDto(this CreateBeneficiaryAddressDto beneficiaryAddressDto, int beneficiaryId)
        {   
            return new BeneficiaryAddress
            {
                Country = beneficiaryAddressDto.Country,
                AddressLineOne = beneficiaryAddressDto.AddressLineOne,
                AddressLineTwo = beneficiaryAddressDto?.AddressLineTwo,
                CityOrTown = beneficiaryAddressDto!.CityOrTown,
                ZipCode = beneficiaryAddressDto.ZipCode,
                DeliveryOption = beneficiaryAddressDto.DeliveryOption,
                BeneficiaryId = beneficiaryId,
            };
        }

        public static UpdateBeneficiaryAddressDto ToUpdateBeneficiaryAddressDto(this BeneficiaryAddress beneficiaryAddress) {
            return new UpdateBeneficiaryAddressDto
            {
                Country = beneficiaryAddress.Country,
                AddressLineOne = beneficiaryAddress.AddressLineOne,
                AddressLineTwo = beneficiaryAddress.AddressLineTwo,
                CityOrTown = beneficiaryAddress.CityOrTown,
                ZipCode = beneficiaryAddress.ZipCode,
                DeliveryOption = beneficiaryAddress.DeliveryOption,
            };
        }

        public static void ApplyUpdate(this UpdateBeneficiaryAddressDto updateBeneficiaryAddressDto, BeneficiaryAddress beneficiaryAddress) {
            beneficiaryAddress.Country = updateBeneficiaryAddressDto.Country;
            beneficiaryAddress.AddressLineOne = updateBeneficiaryAddressDto.AddressLineOne;
            beneficiaryAddress.AddressLineTwo = updateBeneficiaryAddressDto.AddressLineTwo;
            beneficiaryAddress.CityOrTown = updateBeneficiaryAddressDto.CityOrTown;
            beneficiaryAddress.ZipCode = updateBeneficiaryAddressDto?.ZipCode;
            beneficiaryAddress.DeliveryOption = updateBeneficiaryAddressDto?.DeliveryOption!;
        }
    }
}
