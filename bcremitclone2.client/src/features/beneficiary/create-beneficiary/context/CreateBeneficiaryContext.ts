import { createContext } from 'react';
import type { BeneficiaryForm } from 'types/beneficiary';

export interface BeneficiaryFormContextType {
  formData: BeneficiaryForm;
  updateForm: (data: Partial<BeneficiaryForm>) => void;
}
export const BeneficiaryFormContext = createContext<BeneficiaryFormContextType | undefined>(undefined);