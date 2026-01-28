import { useNavigate } from 'react-router';
import Button from "components/ui/Button";
import { useBeneficiaryForm } from '../context/useBeneficiaryForm';
import { useState } from 'react';
import { relationshipOptions } from 'data/selectOptions';
import TextInput from '../../../../components/ui/TextInput';
import SelectInput from '../../../../components/ui/SelectInput';

const Step1 = () => {

  const { formData, updateForm } = useBeneficiaryForm();
  const [clicked, setClicked] = useState(false);

  //const [loading, setLoading] = useState<boolean>(false);
  //const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setClicked(true);
    navigate('/create-beneficiary/step-2');
  }

  return (
    <form
      onSubmit={handleNextStep}
      className="flex flex-col h-full w-full max-w-md pt-10 gap-5"
    >
      <TextInput
        label={{
          htmlFor: "beneficiary-first-name",
          labelName: "Beneficiary First Name"
        }}
        input={{
          id: "beneficiary-first-name",
          name: "beneficiary-first-name",
          type: "text",
          value: formData.firstName,
          onChange: e => updateForm({ firstName: e.target.value }),
          placeholder: "Beneficiary First Name",
          required: true,
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-middle-name",
          labelName: "Beneficiary Middle Name (Optional)"
        }}
        input={{
          id: "beneficiary-middle-name",
          name: "beneficiary-middle-name",
          type: "text",
          value: formData.middleName,
          onChange: e => updateForm({ middleName: e.target.value }),
          placeholder: "Beneficiary Middle Name (Optional)",
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-last-name",
          labelName: "Beneficiary Last Name"
        }}
        input={{
          id: "beneficiary-last-name",
          name: "beneficiary-last-name",
          type: "text",
          value: formData.lastName,
          onChange: e => updateForm({ lastName: e.target.value }),
          placeholder: "Beneficiary Last Name",
          required: true,
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-mobile-number",
          labelName: "Beneficiary Mobile Number (Optional)"
        }}
        input={{
          id: "beneficiary-mobile-number",
          name: "beneficiary-mobile-number",
          type: "text",
          value: formData.mobileNumber,
          onChange: e => updateForm({ mobileNumber: e.target.value }),
          placeholder: "Beneficiary Mobile Number (Optional)",
        }}
      />

      <SelectInput
        label={{
          htmlFor: "relationship",
          labelName: "Select your Relationship"
        }}

        select={{
          id: "relationship",
          name: "relationship",
          value: formData.relationship,
          onChange: e => updateForm({ relationship: e.target.value }),
        }}

        option={{
          optionItems: relationshipOptions,
        }}
      />
      
      <Button
        type="submit"
        disabled={clicked}
        className="w-full p-3 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"
      >
        Next
      </Button>
    </form>
  );
}


export default Step1;


