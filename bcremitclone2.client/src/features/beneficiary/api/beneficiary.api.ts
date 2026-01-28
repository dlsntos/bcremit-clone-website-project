import api from 'api/axios';

export const submitBeneficiary = async (
  data: {
    firstName: string,
    middleName: string,
    lastName: string,
    mobileNumber: string,
    relationship: string,
  }
) => api.post("user/beneficiaries", data);

export const submitBeneficiaryAddress = async ( id: number,
  data: {
    country: string,
    addressLineOne: string,
    addressLineTwo: string,
    cityOrTown: string,
    zipCode: string,
    deliveryOption: string,
  }
) => api.post(`beneficiaries/address/beneficiary/${id}`, data);

export const submitBeneficiaryBank = async (id: number,
  data: {
    bankName: string;
    bankBranch: string;
    bankNumber: string;
  }
) => api.post(`beneficiaries/bank-details/beneficiary/${id}`, data);


export const submitBeneficiaryMobileWallet = async (id: number,
  data: {
    mobileWallet: string;
    accountNumber: string;
  }
) => api.post(`beneficiaries/mobile-wallet/beneficiary/${id}`,data);