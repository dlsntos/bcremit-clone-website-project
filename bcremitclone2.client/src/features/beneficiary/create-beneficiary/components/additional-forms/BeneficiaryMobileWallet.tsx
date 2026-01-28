import { useNavigate } from "react-router";
import Button from "components/ui/Button";
import SelectInput from "components/ui/SelectInput";
import TextInput from "components/ui/TextInput";
import { mobileWalletOptions } from "data/selectOptions";
import { useBeneficiaryForm } from "../../context/useBeneficiaryForm";
import { useCreateBeneficiary } from "../../../hooks/useCreateBeneficiary";

function BeneficiaryMobileWallet() {

  const { formData, updateForm } = useBeneficiaryForm();
  const { clicked, createBeneficiary } = useCreateBeneficiary();
  const navigate = useNavigate();

  const handleSave = () => {
    createBeneficiary(formData);
    navigate("/dashboard");
  }

  return (
    <div className="w-full max-w-md">
      <form className="mt-10">
        <section>
          <SelectInput
            label={{
              htmlFor: "beneficiary-mobile-wallet",
              labelName: "Beneficiary E-Wallet/Mobile Wallet"
            }}
            select={{
              id: "beneficiary-mobile-wallet",
              name: "mobileWallet",
              value: formData.mobileWallet || "",
              onChange: e => updateForm({ mobileWallet: e.target.value }),
            }}
            option={{
              optionItems: mobileWalletOptions,
            }}
          />
        </section>

        <section>
          <TextInput
            label={{
              htmlFor: "beneficiary-account-number",
              labelName: "Beneficiary Mobile/Account Number"
            }}
            input={{
              id: "beneficiary-account-number",
              name: "accountNumber",
              type: "text",
              value: formData.accountNumber || "",
              onChange: e => updateForm({ accountNumber: e.target.value }),
              placeholder: "Beneficiary Account Number",
              required: true,
            }}
          />
        </section>

        <Button
          onClick={handleSave}
          disabled={clicked}
          className="w-full mt-5 p-3 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default BeneficiaryMobileWallet;