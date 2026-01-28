import MainHeader from "components/header/MainHeader";
import Button from "components/ui/Button";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDeleteBeneficiary } from "../hooks/useDeleteBeneficiary";
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendIcon from '@mui/icons-material/Send';
import useFetchBeneficiaryBankDetails from "../hooks/useFetchBeneficiaryBankDetails";
import useFetchBeneficiaryMobileWalletDetails from "../hooks/useFetchBeneficiaryWalletDetails";
import { useEffect } from "react";

interface beneficiaryDetailsLocationState {
  beneficiaryID: number,
  fullName: string,
  beneficiaryDeliveryOption: string,
}
function BeneficiaryDetails() {
  
  //use navigate
  const location = useLocation();
  const { fullName, beneficiaryDeliveryOption } = (location.state as beneficiaryDetailsLocationState) || {};
  const navigate = useNavigate();

  //React Router useParams
  const { id } = useParams();
  const beneficiaryId = Number(id);

  //Flag to trigger fetching to true
  const callApi = beneficiaryDeliveryOption === "Credit to bank" || beneficiaryDeliveryOption === "E-Wallet/Mobile Wallet";

  //CustomHooks
  const { beneficiaryBankDetails, fetchBeneficiaryBankDetails} = useFetchBeneficiaryBankDetails({ beneficiaryId, enabled: callApi });
  const { beneficiaryMobileWallet, fetchBeneficiaryMobileWallet } = useFetchBeneficiaryMobileWalletDetails({ beneficiaryId, enabled: callApi });
  const { deleteBeneficiary } = useDeleteBeneficiary();

  useEffect(() => {
    if (beneficiaryDeliveryOption === "Credit to bank" && !beneficiaryBankDetails) {
      fetchBeneficiaryBankDetails();
    } else if (beneficiaryDeliveryOption === "E-Wallet/Mobile Wallet" && !beneficiaryMobileWallet) {
      fetchBeneficiaryMobileWallet();
    }
  }, [
    beneficiaryDeliveryOption,
    beneficiaryBankDetails,
    beneficiaryMobileWallet,
    fetchBeneficiaryBankDetails,
    fetchBeneficiaryMobileWallet
  ]);

  const handleSendMoney = () => {
    navigate(`/send-money/${beneficiaryId}`, {
      state: { fullName: fullName }
    });
  }
  const handleDelete = async () => {
    await deleteBeneficiary(beneficiaryId);
    navigate("/dashboard");
  };

  const handleUpdate = async () => {
    navigate(`/update-beneficiary/${beneficiaryId}`);
  }

  const showBeneficiaryDeliveryOptions = () => {
    switch (beneficiaryDeliveryOption) {
      case "Cash Pickup":
        return "";

      case "Credit to bank":
        return (          
          <p className="text-lg text-gray-800">{beneficiaryBankDetails?.bankName} | {beneficiaryBankDetails?.bankNumber}</p>
        );

      case "E-Wallet/Mobile Wallet":
        return (
          <p className="text-lg text-gray-800">{beneficiaryMobileWallet?.mobileWallet} | {beneficiaryMobileWallet?.accountNumber}</p>
        );
    }
  }

  return (
    <div className="h-full w-full font-figtree">
      <MainHeader back="/dashboard" close="/dashboard" title="Beneficiary Details" />
      <main className="flex flex-col items-center mt-15">
        <section className="w-full max-w-lg px-8 pt-10">
          <div>
            <h2 className="text-2xl font-bold text-bluewhale">{fullName}</h2>
            <p className="text-lg text-gray-800">{beneficiaryDeliveryOption}</p>
            {showBeneficiaryDeliveryOptions()}
          </div>
          <div className="flex flex-col mt-7 gap-2">
            <Button
              onClick={handleSendMoney}
              className="bg-blue-500 p-3 text-white font-semibold rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
            >
              <SendIcon />
              &nbsp;
              Send Money
            </Button>
            <div className="flex w-full pb-8 gap-2 border-b-1 border-gray-300">
              <Button
                onClick={handleUpdate}
                className="bg-white w-1/2 p-3 text-blue-500 font-semibold rounded-lg border border border-blue-500 transition duration-300 ease-in-out cursor-pointer 
                            hover:bg-gray-800 hover:border-gray-800 hover:text-white"
              >
                <ModeEditOutlinedIcon />
                Update
              </Button>
              <Button
                onClick={handleDelete}
                className="bg-red-500 w-1/2 p-3 text-white font-semibold rounded-lg transition duration-300 ease-in-out cursor-pointer 
                           hover:bg-gray-400"
              >
                Delete
              </Button>
            </div>
          </div>
        </section>
        {/*Make history dynamic*/}
        {/*Render if there is no history yet*/}
        <section>
          <div className="flex flex-col items-center mt-6 text-bluewhale">
            <AccessTimeOutlinedIcon fontSize="large"/>
            <h2 className="mt-2 text-xl font-semibold">No Recent Transaction</h2>
            <h3>Your recent transactions will be shown here</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BeneficiaryDetails;