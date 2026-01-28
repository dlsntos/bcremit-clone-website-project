using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.UserAddress
{
    public class CreateUserAddressDto
    {
        public string AddressLineOne { get; set; } = string.Empty;
        public string? AddressLineTwo { get; set; } = string.Empty;
        public string CityOrTown { get; set; } = string.Empty;
        public string PostCode { get; set; } = string.Empty;

    }
}
