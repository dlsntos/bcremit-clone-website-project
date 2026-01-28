import { useNavigate } from 'react-router';
import Button from "components/ui/Button";
import { useBeneficiaryForm } from '../context/useBeneficiaryForm';
import { countryOptions, deliveryOptions } from '../../../../data/selectOptions';
import SelectInput from '../../../../components/ui/SelectInput';
import TextInput from '../../../../components/ui/TextInput';
import { useCreateBeneficiary } from '../../hooks/useCreateBeneficiary';

const Step2 = () => {

  const { formData, updateForm } = useBeneficiaryForm();
  const { clicked, createBeneficiary } = useCreateBeneficiary();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    switch (formData.deliveryOption) {
      case "Cash Pickup":
        return createBeneficiary(formData);

      case "Credit to bank":
        return navigate("/create-beneficiary/bank-details");

      case "E-Wallet/Mobile Wallet":
        return navigate("/create-beneficiary/mobile-wallet-details");

    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full max-w-md pt-10 gap-5">
      <SelectInput
        label={{
          htmlFor: "beneficiary-country",
          labelName: "Beneficiary's Country"
        }}

        select={{
          id: "country",
          name: "country",
          value: formData.country,
          onChange: e => updateForm({ country: e.target.value }),
        }}

        option={{
          optionItems: countryOptions,
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-address-line-one",
          labelName: "Address 1"
        }}
        input={{
          id: "address-line-one",
          name: "address-line-one",
          type: "text",
          value: formData.addressLineOne,
          onChange: e => updateForm({ addressLineOne: e.target.value }),
          placeholder: "Address 1",
          required: true,
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-address-line-two",
          labelName: "Beneficiary Address 2 (Optional)"
        }}
        input={{
          id: "address-line-two",
          name: "address-line-two",
          type: "text",
          value: formData.addressLineTwo,
          onChange: e => updateForm({ addressLineTwo: e.target.value }),
          placeholder: "Address 2",
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-city-or-town",
          labelName: "Beneficiary City/Town"
        }}
        input={{
          id: "city-or-town",
          name: "city-or-town",
          type: "text",
          value: formData.cityOrTown,
          onChange: e => updateForm({ cityOrTown: e.target.value }),
          placeholder: "Beneficiary City/Town",
          required: true,
        }}
      />
      <TextInput
        label={{
          htmlFor: "beneficiary-zip-code",
          labelName: "Beneficiary Zip Code (Optional)"
        }}
        input={{
          id: "zip-code",
          name: "zip-code",
          type: "text",
          value: formData.zipCode,
          onChange: e => updateForm({ zipCode: e.target.value }),
          placeholder: "Beneficiary Zip Code (Optional)",
        }}
      />

      <SelectInput
        label={{
          htmlFor: "beneficiary-delivery-option",
          labelName: "Select Your Delivery Option"
        }}

        select={{
          id: "beneficiary-delivery-option",
          name: "beneficiary-delivery-option",
          value: formData.deliveryOption,
          onChange: e => updateForm({ deliveryOption: e.target.value }),
        }}

        option={{
          optionItems: deliveryOptions,
        }}
      />

      <Button
        type="submit"
        disabled={clicked}
        className={"w-full p-3 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"}>
        Next
      </Button>
    </form>
  );
}

export default Step2;