import { useEffect, useState } from "react";
import api from "../../../api/axios";
import type { BeneficiaryForm } from "../../../types/beneficiary";

export interface UpdateBeneficiaryPayload {
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
  bankName?: string;
  bankBranch?: string;
  bankNumber?: string;
  mobileWallet?: string;
  accountNumber?: string;
}

interface FetchSingleBeneficiaryProp {
  beneficiaryId: number
}
function useFetchSingleBeneficiary({ beneficiaryId }: FetchSingleBeneficiaryProp) {
  const [originalBeneficiaryFormData, setOriginalBeneficiaryFormData] = useState<UpdateBeneficiaryPayload | null>();
  const [updatedBeneficiaryFormData, setUpdatedBeneficiaryFormData] = useState<UpdateBeneficiaryPayload | null>();

  useEffect(() => {
    const fetchBeneficiaryDetails = async () => {

      const [beneficiaryRes, beneficiaryAddressRes, beneficiaryBankRes, beneficiaryMobileWalletRes] = await Promise.all(
        [
          api.get<BeneficiaryForm>(`/user/beneficiaries/me/${beneficiaryId}`),
          api.get<BeneficiaryForm>(`/beneficiaries/address/${beneficiaryId}`),
          api.get<BeneficiaryForm>(`/beneficiaries/bank-details/beneficiary/${beneficiaryId}`),
          api.get<BeneficiaryForm>(`/beneficiaries/mobile-wallet/beneficiary/${beneficiaryId}`),
        ]
      );

      const fetchedBeneficiaryData = {
        beneficiaryID: beneficiaryRes.data.beneficiaryID,
        firstName: beneficiaryRes.data.firstName,
        middleName: beneficiaryRes.data.middleName,
        lastName: beneficiaryRes.data.lastName,
        mobileNumber: beneficiaryRes.data.mobileNumber,
        relationship: beneficiaryRes.data.relationship,
        addressLineOne: beneficiaryAddressRes.data.addressLineOne,
        addressLineTwo: beneficiaryAddressRes.data.addressLineTwo,
        cityOrTown: beneficiaryAddressRes.data.cityOrTown,
        zipCode: beneficiaryAddressRes.data.zipCode,
        country: beneficiaryAddressRes.data.country,
        deliveryOption: beneficiaryAddressRes.data.deliveryOption,
        bankName: beneficiaryBankRes.data.bankName,
        bankBranch: beneficiaryBankRes.data.bankBranch,
        bankNumber: beneficiaryBankRes.data.bankNumber,
        mobileWallet: beneficiaryMobileWalletRes.data.mobileWallet,
        accountNumber: beneficiaryMobileWalletRes.data.accountNumber,
      };
      setOriginalBeneficiaryFormData(fetchedBeneficiaryData);
      setUpdatedBeneficiaryFormData(fetchedBeneficiaryData);
    }
    fetchBeneficiaryDetails();
  }, [beneficiaryId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedBeneficiaryFormData(prev => ({ ...prev, [name]: value }));
  };

  return { originalBeneficiaryFormData, updatedBeneficiaryFormData, setOriginalBeneficiaryFormData, setUpdatedBeneficiaryFormData, handleChange };
}

export default useFetchSingleBeneficiary;

