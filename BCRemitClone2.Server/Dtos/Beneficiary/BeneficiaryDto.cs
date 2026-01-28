using BCRemitClone2.Server.Dtos.BeneficiaryAddress;
using BCRemitClone2.Server.Dtos.BeneficiaryBankDetails;
using BCRemitClone2.Server.Dtos.User;
using System.ComponentModel.DataAnnotations;

namespace BCRemitClone2.Server.Dtos.Beneficiary
{
    public class BeneficiaryDto
    {
        public int BeneficiaryID { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string? MiddleName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string? MobileNumber { get; set; } = string.Empty;
        public string Relationship { get; set; } = string.Empty;
        public string UserId { get; set; } = default!;

        public required List<BeneficiaryAddressDto> BeneficiaryAddresses { get; set; } 

        public required List<BeneficiaryBankDetailsDto> BeneficiaryBankDetails { get; set; }



    }
}
