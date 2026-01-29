import { useNavigate } from "react-router";
import Button from "../../../../../components/ui/Button";
import SelectInput from "../../../../../components/ui/SelectInput";
import TextInput from "../../../../../components/ui/TextInput";
import { bankOptions } from "../../../../../data/selectOptions";
import { useBeneficiaryForm } from "../../context/useBeneficiaryForm";
import { useCreateBeneficiary } from "../../../hooks/useCreateBeneficiary";
function BeneficiaryBankDetails() {

  const { formData, updateForm } = useBeneficiaryForm();
  const { clicked, createBeneficiary } = useCreateBeneficiary();
  const navigate = useNavigate();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBeneficiary(formData);
    navigate("/dashboard");
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSave}
        className="mt-10"
      >
        <section>
          <SelectInput
            label={{
              htmlFor: "beneficiary-bank",
              labelName: "Beneficiary Bank"
            }}
            select={{
              id: "beneficiary-bank",
              name: "bankName",
              value: formData.bankName || "",
              onChange: e => updateForm({ bankName: e.target.value }),
            }}
            option={{
              optionItems: bankOptions,
            }}
          />
        </section>

        <section>
          <TextInput
            label={{
              htmlFor: "beneficiary-bank-branch",
              labelName: "Beneficiary Bank Branch (Optional)"
            }}
            input={{
              id: "beneficiary-bank-branch",
              name: "bankBranch",
              type: "text",
              value: formData.bankBranch || "",
              onChange: e => updateForm({ bankBranch: e.target.value }),
              placeholder: "Beneficiary Bank Branch (Optional)",
            }}
          />
        </section>

        <section>
          <TextInput
            label={{
              htmlFor: "beneficiary-account-number",
              labelName: "Beneficiary Account Number"
            }}
            input={{
              id: "beneficiary-account-number",
              name: "bankNumber",
              type: "text",
              value: formData.bankNumber || "",
              onChange: e => updateForm({ bankNumber: e.target.value }),
              placeholder: "Beneficiary Account Number",
              required: true,
            }}
          />
        </section>

        <Button
          type="submit"
          disabled={clicked}
          className="w-full mt-5 p-3 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default BeneficiaryBankDetails;