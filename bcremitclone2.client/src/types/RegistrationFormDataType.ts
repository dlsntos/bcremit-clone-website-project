import type { RegisterFormData } from 'types/form';

export type RegisterAction =
  | { type: 'UPDATE_FIELD'; section: keyof RegisterFormData; field?: string; value: string }
  | { type: 'RESET_FORM' };

export type RegisterContext = {
  formData: RegisterFormData;
  dispatch: React.Dispatch<RegisterAction>;
};
