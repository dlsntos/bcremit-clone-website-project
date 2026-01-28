namespace BCRemitClone2.Server.Dtos.UserAddress
{
    public class UserAddressDto
    {
        public int AddressId { get; set; }
        public string AddressLineOne { get; set; } = string.Empty;
        public string? AddressLineTwo { get; set; } = string.Empty;
        public string CityOrTown { get; set; } = string.Empty;
        public string PostCode { get; set; } = string.Empty;

        public string UserId { get; set; } = default!;
    }
}
