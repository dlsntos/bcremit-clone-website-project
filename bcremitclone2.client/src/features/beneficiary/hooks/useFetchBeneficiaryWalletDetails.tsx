import { useState, useCallback } from 'react';
import api from '../../../api/axios';

interface BeneficiaryMobileWalletProps {
  beneficiaryId: number;
  enabled: boolean;
}
interface BeneficiaryMobileWallet {
  mobileWallet: string;
  accountNumber: string;
}
interface ErrorState {
  message: string;
  details?: unknown;
};

function useFetchBeneficiaryMobileWalletDetails({ beneficiaryId, enabled = false }: BeneficiaryMobileWalletProps) {

  const [beneficiaryMobileWallet, setBeneficiaryMobileWallet] = useState<BeneficiaryMobileWallet | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);

  const fetchBeneficiaryMobileWallet = useCallback( async () => {
    try {
      setLoading(true);
      const res = await api.get<BeneficiaryMobileWallet>(`beneficiaries/mobile-wallet/beneficiary/${beneficiaryId}`);

      const beneficiaryMobileWalletData = {
        mobileWallet: res.data.mobileWallet,
        accountNumber: res.data.accountNumber,
      }
      setBeneficiaryMobileWallet(beneficiaryMobileWalletData)
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  }, [beneficiaryId]);

  return { beneficiaryMobileWallet, fetchBeneficiaryMobileWallet, enabled,loading, error };
}

export default useFetchBeneficiaryMobileWalletDetails;