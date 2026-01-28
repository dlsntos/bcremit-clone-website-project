/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react';
import api from 'api/axios';
interface BeneficiaryData{
  beneficiaryID: number,
  country: any,
  firstName: string,
  middleName: string,
  lastName: string,
  fullName: string,
  relationship: string,
  deliveryOption: any;
  bank: any;
  mobileWallet: any;
};
interface BeneficiaryAddressData {
  deliveryOption: string,
  country: string,
  beneficiaryId: number,
};
interface BeneficiaryBankData {
  bankName: string,
  beneficiaryId: number,
};
interface BeneficiaryMobileWalletData {
  mobileWallet: string,
  beneficiaryId: number,
};
interface ErrorState {
  message: string,
  details?: unknown,
};

//Reusable map function
const createMap = <ArrayItems, Key, Value>(
  array: ArrayItems[],
  keySelector: keyof ArrayItems | ((item: ArrayItems) => Key),
  valueSelector: keyof ArrayItems | ((item: ArrayItems) => Value)
): Map<Key, Value> => new Map<Key, Value>(
    array.map(item => {
      const key = typeof keySelector === 'function' ? keySelector(item) : (item[keySelector] as unknown as Key);
      const value = typeof valueSelector === 'function' ? valueSelector(item) : (item[valueSelector] as unknown as Value);
      return [key, value];
    })
);

function useFetchBeneficiary () {

  const [beneficiaryData, setBeneficiaryData] = useState<BeneficiaryData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorState | null>(null);

  const fetchBeneficiary = useCallback(async () => {
    try {
      setLoading(true);
      const [beneficiaryProfileRes, beneficiaryDeliveryOptionRes, beneficiaryBankRes, beneficiaryMobileRes] = await Promise.all(
        [
          api.get<BeneficiaryData[]>("/user/beneficiaries/me"),
          api.get<BeneficiaryAddressData[]>("beneficiaries/address/me/addresses"),
          api.get<BeneficiaryBankData[]>("beneficiaries/bank-details/me/banks"),
          api.get<BeneficiaryMobileWalletData[]>("beneficiaries/mobile-wallet/me/mobile-wallets"),
        ]
      );

      const deliveryOptionMap = createMap(beneficiaryDeliveryOptionRes.data, "beneficiaryId", "deliveryOption");
      const countryMap = createMap(beneficiaryDeliveryOptionRes.data, "beneficiaryId", "country");
      const bankMap = createMap(beneficiaryBankRes.data, "beneficiaryId", "bankName");
      const mobileWalletMap = createMap(beneficiaryMobileRes.data, "beneficiaryId", "mobileWallet");
     
      const beneficiary = beneficiaryProfileRes.data.map((b) => ({
        beneficiaryID: b.beneficiaryID,
        country: countryMap.get(b.beneficiaryID) ?? null,
        firstName: b.firstName,
        middleName: b.middleName,
        lastName: b.lastName,
        fullName: [b.firstName, b.middleName, b.lastName].filter(Boolean).join(" ").toUpperCase(),
        relationship: b.relationship,
        deliveryOption: deliveryOptionMap.get(b.beneficiaryID) ?? null,
        bank: bankMap.get(b.beneficiaryID) ?? null,
        mobileWallet: mobileWalletMap.get(b.beneficiaryID) ?? null,
      }));

      setBeneficiaryData(beneficiary);
    } catch (err: any) {
      setError({ message: "request cancelled", details: err });
    }
    finally {
      setLoading(false);
    }
  }, []);

  return { beneficiaryData, fetchBeneficiary, isLoading, error };
}

export default useFetchBeneficiary;


