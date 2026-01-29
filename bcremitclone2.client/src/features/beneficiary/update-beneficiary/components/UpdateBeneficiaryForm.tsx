import Button from "components/ui/Button";
import { countryOptions, deliveryOptions, relationshipOptions } from "data/selectOptions";
import { useParams } from "react-router";
import TextInput from "components/ui/TextInput";
import SelectInput from "components/ui/SelectInput";
import useFetchSingleBeneficiary from "../../hooks/useFetchSingleBeneficiary";
import { useState } from "react";
import UpdateSuccessfulModal from "./modals/UpdateSuccessfulModal";
import { handleUpdateSubmit } from "../services/handleUpdateSubmit";
import { renderDeliveryOption } from "../helper/RenderDeliveryOption";
function UpdateBeneficiaryForm() {

  //UseState for modal when update is successful
  const [submitModal, setSubmitModal] = useState<boolean>(false);

  const { id } = useParams();
  const beneficiaryId = Number(id);

  const { originalBeneficiaryFormData,
          updatedBeneficiaryFormData,
          setOriginalBeneficiaryFormData,
          handleChange
  } = useFetchSingleBeneficiary({ beneficiaryId });

  return (
    <form
      onSubmit={(e) => handleUpdateSubmit(e, beneficiaryId, originalBeneficiaryFormData, updatedBeneficiaryFormData, setOriginalBeneficiaryFormData, setSubmitModal)}
      className="relative flex flex-col py-10 w-full max-w-xs md:max-w-md gap-3"
    >
      <TextInput
        label={{
            htmlFor: "beneficiary-first-name",
            labelName: "Beneficiary First Name"
        }}
        input={{
          id: "beneficiary-first-name",
          name: "firstName",
          type: "text",
          value: updatedBeneficiaryFormData?.firstName || "",
          onChange: handleChange,
          placeholder: "Beneficiary First Name",
          required: true
        }}
      />

      <TextInput
        label={{
          htmlFor: "beneficiary-middle-name",
          labelName: "Beneficiary Middle Name (Optional)"
        }}
        input={{
          id: "beneficiary-middle-name",
          name: "middleName",
          type: "text",
          value: updatedBeneficiaryFormData?.middleName || "",
          onChange: handleChange,
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
          name: "lastName",
          type: "text",
          value: updatedBeneficiaryFormData?.lastName || "",
          onChange: handleChange,
          placeholder: "Beneficiary Last Name",
          required: true
        }}
      />
      
      <TextInput
        label={{
          htmlFor: "beneficiary-mobile-number",
          labelName: "Beneficiary Mobile Number (Optional)"
        }}
        input={{
          id: "beneficiary-mobile-number",
          name: "mobileNumber",
          type: "text",
          value: updatedBeneficiaryFormData?.mobileNumber || "",
          onChange: handleChange,
          placeholder: "Beneficiary Mobile Number (Optional)",
        }}
      />      

      <SelectInput
        label={{
          htmlFor: "beneficiary-relationship",
          labelName: "Beneficiary Relationship"
        }}

        select={{
          id: "beneficiary-relationship",
          name: "relationship",
          value: updatedBeneficiaryFormData?.relationship || "",
          onChange: handleChange,
        }}

        option={{
          optionItems: relationshipOptions,
        }}
      />
      

      <TextInput
        label={{
          htmlFor: "beneficiary-address-line-one",
          labelName: "Beneficiary Address Line 1"
        }}
        input={{
          id: "beneficiary-address-line-one",
          name: "addressLineOne",
          type: "text",
          value: updatedBeneficiaryFormData?.addressLineOne || "",
          onChange: handleChange,
          placeholder: "Beneficiary Address Line 1",
          required: true,
        }}
      />
      
      <TextInput
        label={{
          htmlFor: "beneficiary-address-line-two",
          labelName: "Beneficiary Address Line 2 (Optional)"
        }}
        input={{
          id: "beneficiary-address-line-two",
          name: "addressLineTwo",
          type: "text",
          value: updatedBeneficiaryFormData?.addressLineTwo || "",
          onChange: handleChange,
          placeholder: "Beneficiary Address Line 2 (Optional)",
        }}
      />
      
      <TextInput
        label={{
          htmlFor: "beneficiary-city-or-town",
          labelName: "Beneficiary City/Town"
        }}
        input={{
          id: "beneficiary-city-or-town",
          name: "cityOrTown",
          type: "text",
          value: updatedBeneficiaryFormData?.cityOrTown || "",
          onChange: handleChange,
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
          id: "beneficiary-zip-code",
          name: "zipCode",
          type: "text",
          value: updatedBeneficiaryFormData?.zipCode || "",
          onChange: handleChange,
          placeholder: "Beneficiary Zip Code (Optional)",
        }}
      />   

      <SelectInput
        label={{
          htmlFor: "beneficiary-country",
          labelName: "Beneficiary Country"
        }}

        select={{
          id: "beneficiary-country",
          name: "country",
          value: updatedBeneficiaryFormData?.country || "",
          onChange: handleChange,
        }}

        option={{
          optionItems: countryOptions,
        }}
      />
     
      <SelectInput
        label={{
          htmlFor: "beneficiary-delivery-option",
          labelName: "Beneficiary Delivery Option"
        }}

        select={{
          id: "beneficiary-delivery-option",
          name: "deliveryOption",
          value: updatedBeneficiaryFormData?.deliveryOption || "",
          onChange: handleChange,
        }}

        option={{
          optionItems: deliveryOptions,
        }}

      />

      {renderDeliveryOption(handleChange, updatedBeneficiaryFormData)}

      <Button
        type="submit"
        className="w-full p-3 mt-2 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"
      >
        Update
      </Button>
      {submitModal && (<UpdateSuccessfulModal successful={submitModal} onClose={() => setSubmitModal(false)} />)}
    </form>
  );
}

export default UpdateBeneficiaryForm;