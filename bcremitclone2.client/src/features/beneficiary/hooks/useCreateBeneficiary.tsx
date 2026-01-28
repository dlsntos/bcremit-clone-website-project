import { useNavigate } from "react-router";
import type { BeneficiaryForm } from "../../../types/beneficiary";
import { submitBeneficiary, submitBeneficiaryAddress, submitBeneficiaryBank, submitBeneficiaryMobileWallet } from "../api/beneficiary.api";
import { useState } from "react";


export const useCreateBeneficiary = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const createBeneficiary = async (formData: BeneficiaryForm) => {
    
    try {
      setClicked(true);
      const res = await submitBeneficiary(
        {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          mobileNumber: formData.mobileNumber,
          relationship: formData.relationship,
        }
      );

      const beneficiaryId = res.data.beneficiaryID;

      await submitBeneficiaryAddress(beneficiaryId,
        {
          country: formData.country,
          addressLineOne: formData.addressLineOne,
          addressLineTwo: formData.addressLineTwo,
          cityOrTown: formData.cityOrTown,
          zipCode: formData.zipCode,
          deliveryOption: formData.deliveryOption,
        }
      );

      await submitBeneficiaryBank(beneficiaryId,
        {
          bankName: formData.bankName || "",
          bankBranch: formData.bankBranch || "",
          bankNumber: formData.bankNumber || "",
        }
      );

      await submitBeneficiaryMobileWallet(beneficiaryId,
        {
          mobileWallet: formData.mobileWallet || "",
          accountNumber: formData.accountNumber || "",
        }
      );
      console.log(formData)
      navigate("/dashboard");
    }
    catch (e) {
      console.log(e);
    }
  };
  return { clicked, createBeneficiary };
}

