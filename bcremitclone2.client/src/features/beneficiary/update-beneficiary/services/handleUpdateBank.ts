import api from "../../../../api/axios";
export interface UpdateBeneficiaryBankPayload {
  firstName?: string;
  lastName?: string;
  bankName: string;
  bankBranch: string;
  bankNumber: string;
};

export const handleUpdateBank = async (beneficiaryId: number, beneficiaryBankData: Partial<UpdateBeneficiaryBankPayload>): Promise<UpdateBeneficiaryBankPayload | null> => {
  try {
    const res = await api.put<UpdateBeneficiaryBankPayload>(`beneficiaries/bank-details/beneficiary/${beneficiaryId}`, beneficiaryBankData);
    return res.data;
  }
  catch (err) {
    console.log(err);
    return null;
  }
};