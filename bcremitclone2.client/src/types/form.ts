export interface PersonalInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
  country: string;
  sourceOfFunds: string;
};

export interface ContactInfo {
  dialCode: string;
  mobileNumber: string;
};

export interface AccountInfo {
  email: string;
  password: string;
};

export interface BirthDate {
  day: string;
  month: string;
  year: string;
};

export interface AddressInfo {
  addressLineOne: string;
  addressLineTwo?: string;
  cityOrTown: string;
  postalCode: string;
};

export interface RegistrationAccountInfo {
  email: string;
  password: string;
  confirmEmail: string;
  confirmPassword: string;
};

export interface RegisterFormData {
  userId?: string;
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  registrationAccountInfo: RegistrationAccountInfo;
  birthDate: BirthDate;
  addressInfo: AddressInfo;
} 

