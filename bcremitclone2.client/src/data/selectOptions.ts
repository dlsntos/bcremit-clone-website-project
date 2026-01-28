import ukFlagRounded from 'assets/flag-icon-round/united-kingdom-rounded.png';
import phFlagRounded from 'assets/flag-icon-round/philippines-rounded.png';

export interface Option {
  value: string,
  label: string,
  image?: string,
}

export const dialCodeOptions: Option[] = [
  {
    value: "PH",
    label: "+ 63"
  },
  {
    value: "UK",
    label: "+ 44"
  },
  {
    value: "ES",
    label: "+ 54"
  },
  {
    value: "ph",
    label: "+ 63"
  },
];

export const countryOptions: Option[] = [
  {
    value: "philippines",
    label: "PHILIPPINES"
  },
  {
    value: "united-kingdom",
    label: "UNITED KINGDOM"
  },
  {
    value: "spain",
    label: "SPAIN"
  },
  {
    value: "canada",
    label: "CANADA"
  }
];

export const relationshipOptions: string[] = [
  "Family/Relative",
  "Fiance/Partner",
  "Myself/Own Account",
  "Friend",
  "Savings/Investment",
  "Business",
  "Employee"
];

export const sourceOfFundsOptions: string[] = [
  "Salary",
  "Pension",
  "Benefits",
  "Self-Employment",
  "Business"
];

export const deliveryOptions: string[] = [
  "Cash Pickup",
  "Credit to bank",
  "E-Wallet/Mobile Wallet"
];

export const beneficiaryCountry: Option[] = [
  { value: 'united kingdom', label: 'UNITED KINGDOM', image: ukFlagRounded },
  { value: 'philippines', label: 'PHILIPPINES', image: phFlagRounded }
];

export const countrySendAmountOptions: Option[] = [
  { value: 'united kingdom', label: 'GBP', image: ukFlagRounded },
  { value: 'philippines', label: 'PHP', image: phFlagRounded }
];

export const countryRecipientOptions: Option[] = [
  { value: 'philippines', label: 'PHP', image: phFlagRounded }
];

export const bankOptions: string[] = [
  "BDO",
  "METROBANK",
  "CHINABANK"
];

export const mobileWalletOptions: string[] = [
  "GCASH-XCHANGE",
  "SHOPEE-PAY",
  "PAYMAYA"
];

export const remittanceOptions: string[] = [
  "Business",
  "Donation",
  "Education",
];

//export const monthOption: Option[] = [
//  {value: "1", label:"January"},
//  {value: "2", label:"Feburary"},
//  {value: "3", label:"March"},
//  {value: "4", label:"April"},
//  {value: "5", label:"May"},
//  {value: "6", label:"June"},
//  {value: "7", label:"July"},
//  {value: "8", label:"August"},
//  {value: "9", label:"September"},
//  {value: "10", label:"October"},

//]