using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCRemitClone2.Server.Models
{
    public class UserAddress
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AddressId { get; set; }
        
        [Required]
        public string AddressLineOne { get; set; } = string.Empty;

        public string? AddressLineTwo {get; set;} = string.Empty;
        
        [Required]
        public string CityOrTown {get; set;} = string.Empty;
        
        [Required]
        public string PostCode {get; set;} = string.Empty;

        [Required]
        public string UserId { get; set; } = default!;

        //[Required]
        public  User? User { get; set; }



    }
}
