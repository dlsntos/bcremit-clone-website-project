using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Dtos.BeneficiaryAddress
{
    public class BeneficiaryAddressDto
    {
        public int Id { get; set; }
        [Required]
        public string Country { get; set; } = string.Empty;
        [Required]
        public string AddressLineOne { get; set; } = string.Empty;
        public string? AddressLineTwo { get; set; } = string.Empty;
        
        [Required]
        public string CityOrTown { get; set; } = string.Empty;
        public string? ZipCode { get; set; } = string.Empty;
        [Required]
        public string DeliveryOption { get; set; } = string.Empty;
        
        [Required]
        public int? BeneficiaryId { get; set; }
    }
}
