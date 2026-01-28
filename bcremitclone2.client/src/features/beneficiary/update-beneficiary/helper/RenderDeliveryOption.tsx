import SelectInput from "../../../../components/ui/SelectInput";
import TextInput from "../../../../components/ui/TextInput";
import { bankOptions, mobileWalletOptions } from "../../../../data/selectOptions";
import type { UpdateBeneficiaryPayload } from "../../hooks/useFetchSingleBeneficiary";

export const renderDeliveryOption = (handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, updatedBeneficiaryFormData: UpdateBeneficiaryPayload | null | undefined) => {
  switch (updatedBeneficiaryFormData?.deliveryOption) {
    case "Cash Pickup":
      return;

    case "Credit to bank":
      return <>
        <SelectInput
          label={{
            htmlFor: "beneficiary-bank-name",
            labelName: "Beneficiary Bank"
          }}

          select={{
            id: "beneficiary-bank-name",
            name: "bankName",
            value: updatedBeneficiaryFormData?.bankName || "",
            onChange: handleChange,
          }}

          option={{
            optionItems: bankOptions,
          }}
        />

        <TextInput
          label={{
            htmlFor: "beneficiary-bank-branch",
            labelName: "Beneficiary Bank Branch (Optional)"
          }}
          input={{
            id: "beneficiary-bank-branch",
            name: "bankBranch",
            type: "text",
            value: updatedBeneficiaryFormData?.bankBranch || "",
            onChange: handleChange,
            placeholder: "Beneficiary Bank Branch (Optional)",
          }}
        />

        <TextInput
          label={{
            htmlFor: "beneficiary-bank-number",
            labelName: "Beneficiary Account Number"
          }}
          input={{
            id: "beneficiary-bank-number",
            name: "bankNumber",
            type: "text",
            value: updatedBeneficiaryFormData?.bankNumber || "",
            onChange: handleChange,
            placeholder: "Beneficiary Account Number",
            required: true
          }}
        />
      </>;

    case "E-Wallet/Mobile Wallet":
      return <>
        <SelectInput
          label={{
            htmlFor: "beneficiary-mobile-wallet",
            labelName: "Beneficiary Bank"
          }}

          select={{
            id: "beneficiary-mobile-wallet",
            name: "mobileWallet",
            value: updatedBeneficiaryFormData?.mobileWallet || "",
            onChange: handleChange,
          }}

          option={{
            optionItems: mobileWalletOptions,
          }}
        />

        <TextInput
          label={{
            htmlFor: "beneficiary-account-number",
            labelName: "Beneficiary Account Number"
          }}
          input={{
            id: "beneficiary-account-number",
            name: "accountNumber",
            type: "text",
            value: updatedBeneficiaryFormData?.accountNumber || "",
            onChange: handleChange,
            placeholder: "Beneficiary Account Number",
            required: true
          }}
        />
      </>;
  }
};