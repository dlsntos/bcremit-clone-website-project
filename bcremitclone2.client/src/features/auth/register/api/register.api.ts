// features/auth/register/api/register.api.ts
import api from 'api/axios';

export const submitAccountStep = async (
  data: {
    email: string;
    password: string;
    confirmPassword: string;
    country: string;
    dialCode: string;
    phoneNumber: string;
  }
) => api.post('/user/register', data);

export const submitPersonalInfoStep = async (
  data: {  
   firstName: string;
   middleName?: string;
   lastName: string;
   //birthDate: null ,
   sourceOfFunds: string;
  }
) => api.post(`/user/user-information`, data);

export const submitAddressStep = async (
  data: {
  addressLineOne: string;
  addressLineTwo?: string;
  cityOrTown: string;
  postCode: string;
  }
) => api.post('/user/user-address', data);
