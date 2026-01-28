import api from "../../../../api/axios";
import { beneficiaryAddressFields, beneficiaryProfileFields } from "../config/beneficiaryPatchFields";
import { generatePatchData, pickFields } from "../helper/PatchOperation";
import { handleUpdateBank, type UpdateBeneficiaryBankPayload } from "../services/handleUpdateBank";
import { handleUpdateMobileWallet, type UpdateBeneficiaryMobileWalletPayload } from "../services/handleUpdateMobileWallet";
interface UpdateBeneficiaryPayload {
  beneficiaryID?: number
  firstName?: string;
  middleName?: string;
  lastName?: string;
  mobileNumber?: string;
  relationship?: string;
  addressLineOne?: string;
  addressLineTwo?: string | null;
  cityOrTown?: string;
  zipCode?: string;
  country?: string;
  deliveryOption?: string;
}

//DEFAULT VALUES FOR BANK AND MOBILE WALLET AFTER SWITCHING DELIVERY OPTIONS
const beneficiaryBankDefaultData: UpdateBeneficiaryBankPayload = {
  bankName: "BDO",
  bankBranch: "",
  bankNumber: "",
};
const beneficiaryMobileWalletDefaultData: UpdateBeneficiaryMobileWalletPayload = {
  mobileWallet: "GCASH XCHANGE",
  accountNumber: "",
};

export const handleUpdateSubmit = async (
  e: React.FormEvent,
  beneficiaryId: number,
  originalBeneficiaryFormData: UpdateBeneficiaryPayload | null | undefined,
  updatedBeneficiaryFormData: UpdateBeneficiaryPayload | null | undefined,
  setOriginalBeneficiaryFormData: React.Dispatch<React.SetStateAction<UpdateBeneficiaryPayload | null | undefined>>,
  setSubmitModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  if (!originalBeneficiaryFormData || !updatedBeneficiaryFormData) return;

  try {
    const originalBeneficiaryProfile = pickFields(originalBeneficiaryFormData, beneficiaryProfileFields);
    const updatedBeneficiaryProfile = pickFields(updatedBeneficiaryFormData, beneficiaryProfileFields);
    const beneficiaryProfilePatch = generatePatchData(originalBeneficiaryProfile, updatedBeneficiaryProfile);

    const originalBeneficiaryAddress = pickFields(originalBeneficiaryFormData, beneficiaryAddressFields);
    const updatedBeneficiaryAddress = pickFields(updatedBeneficiaryFormData, beneficiaryAddressFields);
    const beneficiaryAddressPatch = generatePatchData(originalBeneficiaryAddress, updatedBeneficiaryAddress);
    
    const requests: Promise<unknown>[] = [];

    if (beneficiaryProfilePatch.length > 0) {
      requests.push(
        api.patch<UpdateBeneficiaryPayload>(
          `user/beneficiaries/me/${beneficiaryId}`,
          beneficiaryProfilePatch,
          { headers: { "Content-Type": "application/json-patch+json" } }
        )
      );
    }

    if (beneficiaryAddressPatch.length > 0) {
      requests.push(
        api.patch(
          `beneficiaries/address/beneficiary/${beneficiaryId}`,
          beneficiaryAddressPatch,
          { headers: { "Content-Type": "application/json-patch+json" } }
        )
      );
    }

    await Promise.all(requests);
    setOriginalBeneficiaryFormData(updatedBeneficiaryFormData);

    if (updatedBeneficiaryFormData.deliveryOption === "Credit to bank") {

      handleUpdateBank(beneficiaryId, updatedBeneficiaryFormData);
      handleUpdateMobileWallet(beneficiaryId, beneficiaryMobileWalletDefaultData);
      setSubmitModal(true);

    } else if (updatedBeneficiaryFormData.deliveryOption === "E-Wallet/Mobile Wallet") {

      handleUpdateBank(beneficiaryId, beneficiaryBankDefaultData);
      handleUpdateMobileWallet(beneficiaryId, updatedBeneficiaryFormData);
      setSubmitModal(true);

    } else {
      handleUpdateMobileWallet(beneficiaryId, beneficiaryMobileWalletDefaultData);
      handleUpdateBank(beneficiaryId, beneficiaryBankDefaultData);
      setSubmitModal(true);
    }

  } catch (err) {
    console.error(err);
    alert("Update failed");
  }
};