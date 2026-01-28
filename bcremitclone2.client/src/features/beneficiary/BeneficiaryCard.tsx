import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router';
import Button from 'components/ui/Button';
import { countryImages, type FLAGS } from '../../data/country';
interface BeneficiaryCardProps {
  beneficiaryID: number,
  country: string,
  fullName: string,
  beneficiaryDeliveryOption: string
  paymentChannel: () => string;
}
function BeneficiaryCard({ beneficiaryID, country, fullName, beneficiaryDeliveryOption, paymentChannel }: BeneficiaryCardProps) {

  const navigate = useNavigate();

  //Function for finding the correct country image based on the value from the server
  const countryObj: FLAGS | undefined = countryImages.find(
    c => c.value?.toLowerCase() === country?.toLowerCase().trim()
  );

  const handleBeneficiaryDetails = () => {
    navigate(`/beneficiary-details/${beneficiaryID}`, {
      state: { fullName: fullName, beneficiaryDeliveryOption: beneficiaryDeliveryOption }
    });
  }

  const handleSendMoney = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/send-money/${beneficiaryID}`, {
      state: { fullName: fullName }
    });
  }

  const renderDeliveryOption = () => {

    switch (beneficiaryDeliveryOption) {

      case "Cash Pickup":
        return "Cash Pickup";

      case "Credit to bank":
        return "Credit to Bank";

      case "E-Wallet/Mobile Wallet":
        return "E-Wallet";

    } 
  }

  return (
    <>
      <div
        className="flex flex-col p-5 w-full max-w-[400px] h-53 justify-between bg-white rounded-lg shadow-md cursor-pointer transition duration-200 hover:scale-105"
        onClick={handleBeneficiaryDetails}
      >
        <div>
          <div className="flex flex-row items-center">
            <img
              src={countryObj?.image}
              alt={countryObj?.value}
              className="h-6 w-6"
            />
            <h1 className="p-2 text-bluewhale text-[clamp(20px,2vw,25px)] font-bold">{fullName}</h1>
          </div>
          <p className="text-clamp[10px, 5vw, 20px] text-gray-500"> {renderDeliveryOption()} </p>
          <p className="text-clamp[10px, 5vw, 20px] text-gray-500">{paymentChannel()}</p>
        </div>
        <Button
          onClick={handleSendMoney}
          className="block p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400">
          <SendIcon />
          &nbsp;
          Send Money
        </Button>
      </div>
    </>
  );
}
export default BeneficiaryCard;