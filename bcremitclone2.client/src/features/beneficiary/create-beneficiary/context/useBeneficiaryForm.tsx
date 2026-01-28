import { useContext } from "react";
import { BeneficiaryFormContext } from "./CreateBeneficiaryContext";

export function useBeneficiaryForm() {
  const context = useContext(BeneficiaryFormContext);

  if (!context) {
    throw new Error(
      "useBeneficiaryForm must be used within a BeneficiaryFormProvider"
    );
  }

  return context;
}
