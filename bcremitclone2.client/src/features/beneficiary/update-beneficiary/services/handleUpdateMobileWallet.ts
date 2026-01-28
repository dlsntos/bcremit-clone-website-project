import api from "../../../../api/axios";
export interface UpdateBeneficiaryMobileWalletPayload {
  firstName?: string;
  lastName?: string;
  bankName?: string;
  bankBranch?: string;
  bankNumber?: string;
  mobileWallet: string;
  accountNumber: string;
};

export const handleUpdateMobileWallet = async (beneficiaryId: number, beneficiaryMobileWalletData: Partial<UpdateBeneficiaryMobileWalletPayload>): Promise<UpdateBeneficiaryMobileWalletPayload | null> => {
  try {
    const res = await api.put<UpdateBeneficiaryMobileWalletPayload>(`beneficiaries/mobile-wallet/beneficiary/${beneficiaryId}`, beneficiaryMobileWalletData);
    return res.data;
  }
  catch (err) {
    console.log(err);
    return null;
  }
};