import { useState, useCallback } from "react";
import api from "../../../api/axios";
interface BeneficiaryBankDetailsProps {
  beneficiaryId: number;
  enabled: boolean;
};
interface BeneficiaryBankDetails{
  bankName: string;
  bankBranch: string;
  bankNumber: string;
};  

function useFetchBeneficiaryBankDetails({ beneficiaryId, enabled = false }: BeneficiaryBankDetailsProps) {

  const [beneficiaryBankDetails, setBeneficiaryBankDetails] = useState<BeneficiaryBankDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchBeneficiaryBankDetails = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get<BeneficiaryBankDetails>(`beneficiaries/bank-details/beneficiary/${beneficiaryId}`);

      const beneficiaryBankData = {
        bankName: res.data.bankName,
        bankBranch: res.data.bankBranch,
        bankNumber: res.data.bankNumber,
      } 

      setBeneficiaryBankDetails(beneficiaryBankData);
    } catch (error) {
        console.error("Failed to fetch bank details:", error);
    } finally {
        setLoading(false); 
    }
  }, [beneficiaryId]);


  return { beneficiaryBankDetails, fetchBeneficiaryBankDetails,loading, enabled };
}

  export default useFetchBeneficiaryBankDetails;