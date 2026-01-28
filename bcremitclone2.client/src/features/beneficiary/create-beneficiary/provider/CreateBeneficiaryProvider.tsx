import { useEffect, useState } from "react";
import type { BeneficiaryForm } from "../../../../types/beneficiary";
import { BeneficiaryFormContext } from "../context/CreateBeneficiaryContext";

function CreateBeneficiaryProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<BeneficiaryForm>({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    relationship: "Family/Relative",
    country: "philippines",
    addressLineOne: "",
    addressLineTwo: "",
    cityOrTown: "",
    zipCode: "",
    deliveryOption: "Cash Pickup",
    bankName: "BDO",
    bankNumber: "",
    bankBranch: "",
    mobileWallet: "GCASH XCHANGE",
    accountNumber: "",
  });

  const updateForm = (data: Partial<BeneficiaryForm>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  return (
    <BeneficiaryFormContext.Provider value={{ formData, updateForm }}>
      { children }
    </BeneficiaryFormContext.Provider>  
  );
}

export default CreateBeneficiaryProvider;