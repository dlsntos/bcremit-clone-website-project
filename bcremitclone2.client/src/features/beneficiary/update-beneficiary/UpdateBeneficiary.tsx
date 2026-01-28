import MainHeader from "../../../components/header/MainHeader";
import UpdateBeneficiaryForm from "./components/UpdateBeneficiaryForm";

function UpdateBeneficiary () {
  return (
    <>
      <MainHeader title="Update Beneficiary" back="/dashboard" close="/dashboard" />
      <main className="flex justify-center h-auto w-full mt-15">
        <UpdateBeneficiaryForm/>
      </main>
    </>
  );
}

export default UpdateBeneficiary;