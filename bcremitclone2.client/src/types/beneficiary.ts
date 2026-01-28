export interface BeneficiaryForm {
  beneficiaryID?: number,
  firstName: string;
  middleName: string;
  lastName: string;
  fullName?: string;
  mobileNumber: string;
  relationship: string;
  country: string;
  addressLineOne: string;
  addressLineTwo: string;
  cityOrTown: string;
  zipCode: string;
  deliveryOption: string;
  bankName?: string;
  bankBranch?: string;
  bankNumber?: string;
  accountNumber?: string;
  mobileWallet?: string;
}