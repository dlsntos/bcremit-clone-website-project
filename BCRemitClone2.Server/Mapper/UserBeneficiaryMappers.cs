using BCRemitClone2.Server.Dtos.Beneficiary;
using BCRemitClone2.Server.Models;
using System.Runtime.CompilerServices;

namespace BCRemitClone2.Server.Mapper
{
    public static class UserBeneficiaryMappers
    {
        public static BeneficiaryDto ToBeneficiaryDto(this Beneficiary beneficiaryModel) 
        {

            return new BeneficiaryDto
            {
                BeneficiaryID = beneficiaryModel.Id,
                FirstName = beneficiaryModel.FirstName,
                MiddleName = beneficiaryModel.MiddleName,
                LastName = beneficiaryModel.LastName,
                MobileNumber = beneficiaryModel.MobileNumber,
                Relationship = beneficiaryModel.Relationship,
                BeneficiaryAddresses = beneficiaryModel.BeneficiaryAddresses.Select(s => s.ToBeneficiaryAddressDto()).ToList(),
                BeneficiaryBankDetails = beneficiaryModel.BeneficiaryBankDetails.Select(s => s.ToBeneficiaryBankDetailsDto()).ToList(),
                UserId = beneficiaryModel.UserId,
            };
        
        }

        public static Beneficiary ToCreateBeneficiaryDto(this CreateBeneficiaryDto beneficiaryDto, string userId)
        {

            return new Beneficiary
            {
                FirstName = beneficiaryDto.FirstName,
                MiddleName = beneficiaryDto.MiddleName,
                LastName = beneficiaryDto.LastName,
                MobileNumber = beneficiaryDto.MobileNumber,
                Relationship = beneficiaryDto.Relationship,
                UserId = userId
            };

        }

        public static UpdateBeneficiaryDto ToUpdateBeneficiaryDto(this Beneficiary beneficiary)
        {
            return new UpdateBeneficiaryDto
            {
                FirstName = beneficiary.FirstName,
                MiddleName = beneficiary.MiddleName!,
                LastName = beneficiary.LastName,
                MobileNumber = beneficiary.MobileNumber!,
                Relationship = beneficiary.Relationship,
            };
        }

        public static void ApplyUpdate(this UpdateBeneficiaryDto updateBeneficiaryDto, Beneficiary beneficiary)
        {
            beneficiary.FirstName = updateBeneficiaryDto.FirstName;
            beneficiary.MiddleName = updateBeneficiaryDto.MiddleName;
            beneficiary.LastName = updateBeneficiaryDto.LastName;
            beneficiary.MobileNumber = updateBeneficiaryDto.MobileNumber;
            beneficiary.Relationship = updateBeneficiaryDto.Relationship;
        }
    }
}
