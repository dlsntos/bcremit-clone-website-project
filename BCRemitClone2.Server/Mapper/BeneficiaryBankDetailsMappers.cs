using BCRemitClone2.Server.Dtos.BeneficiaryBank;
using BCRemitClone2.Server.Dtos.BeneficiaryBankDetails;
using BCRemitClone2.Server.Models;

namespace BCRemitClone2.Server.Mapper
{
    public static class BeneficiaryBankDetailsMappers
    {
        public static BeneficiaryBankDetailsDto ToBeneficiaryBankDetailsDto(this BeneficiaryBank beneficiaryBankDetails)
        {
            return new BeneficiaryBankDetailsDto
            {
                Id = beneficiaryBankDetails.Id,
                BankName = beneficiaryBankDetails.BankName,
                BankBranch = beneficiaryBankDetails.BankBranch,
                BankNumber = beneficiaryBankDetails.BankNumber,
                BeneficiaryId = beneficiaryBankDetails.BeneficiaryId,
            };
        }

        public static BeneficiaryBank ToCreateBeneficiaryBankDetailsDto(this CreateBeneficiaryBankDetailsDto beneficiaryBankDetailsDto, int beneficiaryId) 
        {
            return new BeneficiaryBank
            { 
                BankName = beneficiaryBankDetailsDto.BankName,
                BankBranch = beneficiaryBankDetailsDto?.BankBranch,
                BankNumber = beneficiaryBankDetailsDto!.BankNumber,
                BeneficiaryId = beneficiaryId,
            };
        }

        public static BeneficiaryBank ToUpdateBeneficiaryDetailsDto(this UpdateBeneficiaryBankDetailsDto beneficiaryBankDetailsDto, int beneficiaryId)
        {
            return new BeneficiaryBank
            {
                BankName = beneficiaryBankDetailsDto.BankName,
                BankBranch = beneficiaryBankDetailsDto?.BankBranch,
                BankNumber = beneficiaryBankDetailsDto!.BankNumber,
            };

        }
    }
}
