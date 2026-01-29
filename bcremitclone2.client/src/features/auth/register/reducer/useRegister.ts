/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterFormData } from 'types/form';

export const initialFormData: RegisterFormData = {
  personalInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    country: "philippines",
    sourceOfFunds: "",
  },
  registrationAccountInfo: {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  },
  contactInfo: {
    dialCode: "+63",
    mobileNumber: "",
  },
  birthDate: {
    day: "",
    month: "",
    year: "",
  },
  addressInfo: {
    addressLineOne: "",
    addressLineTwo: "",
    cityOrTown: "",
    postalCode: "",
  }
}

type Action =
  | { type: "UPDATE_FIELD"; section: keyof RegisterFormData; field?: string; value: string }
  | { type: "RESET_FORM" };

export const registerReducer = (state: RegisterFormData, action: Action) => {

  switch (action.type) {
    case "UPDATE_FIELD":
      if (action.field) {
        return {
          ...state,
          [action.section]: {
            ...(state[action.section] as any),
            [action.field]: action.value,
          },
        };
      } else {
        return {
          ...state,
          [action.section]: action.value,
        };
      }
    case "RESET_FORM":
      return initialFormData;
    default:
      return state; 
  }
}

