import { useNavigate } from 'react-router';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BeneficiaryCard from 'features/beneficiary/BeneficiaryCard';
import Button from 'components/ui/Button'; 
import useFetchBeneficiary from '../../../features/beneficiary/hooks/useFetchAllBeneficaries';
import { useEffect } from 'react';

function DashboardHome () {
  const { beneficiaryData, fetchBeneficiary } = useFetchBeneficiary(); 
  const navigate = useNavigate();

  const date = new Date();

  const gbp = '\u00A3';
  const php = '\u20B1';

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', 
    day: '2-digit',   
    month: 'long',     
    year: 'numeric'    
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  useEffect(() => {
    fetchBeneficiary();
  }, [fetchBeneficiary]);

  const handleCreateBeneficiary = () => {
    navigate("/create-beneficiary");
  };

  const renderPaymentChannel = (bank: string, mobileWallet: string, deliveryOption: string): string => {
    switch (deliveryOption) { 
      case "Credit to bank":
        return bank;

      case "E-Wallet/Mobile Wallet":
        return mobileWallet;

      default:
        return "";
    };
  };

  return (
    <div className="flex flex-col items-center md:items-stretch py-5 px-8 font-figtree">
      <section className="pt-10 pb-2 flex flex-row flex-wrap justify-center md:justify-between max-w-sm md:max-w-full items-center">
        <div>
          <h1 className="text-3xl lg:text-4xl text-bluewhale font-bold">
            {gbp}1.00={php}81.08
          </h1>
          <p className="text-lg text-gray-500">
            {formattedDate}
          </p>
        </div>
        <Button
          className="px-10 lg:px-20 py-3 mt-3 md:mt-0 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md cursor-pointer transition duration-300 hover:bg-gray-300"
          onClick={handleCreateBeneficiary}
        >
          {<PersonAddAlt1Icon />} &nbsp; Add new beneficiary
        </Button>
      </section>
      <section className="w-full mt-5 grid justify-items-center grid-cols-1 lg:grid-cols-[repeat(3,minmax(0,400px))] auto-rows-[15rem] place-content-start gap-10">
        {beneficiaryData.map((beneficiary, index) => (
          <BeneficiaryCard
            key={`${beneficiary.beneficiaryID}-${index}`}
            country={beneficiary.country}
            beneficiaryID={beneficiary.beneficiaryID}
            fullName={beneficiary.fullName}
            beneficiaryDeliveryOption={beneficiary.deliveryOption}
            paymentChannel={() => renderPaymentChannel(beneficiary.bank, beneficiary.mobileWallet, beneficiary.deliveryOption)}
           />
        ))}
      </section>
    </div>
  );
}

export default DashboardHome;