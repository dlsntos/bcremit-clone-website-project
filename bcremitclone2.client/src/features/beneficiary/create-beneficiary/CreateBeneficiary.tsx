import { Outlet } from 'react-router';
import MainHeader from 'components/header/MainHeader';
import CreateBeneficiaryProvider from './provider/CreateBeneficiaryProvider';

function CreateBeneficiary (){
  return (
    <>
      <CreateBeneficiaryProvider>
        <MainHeader back="/dashboard" close="/dashboard" title={"Create Beneficiary"} />
        <main className="flex flex-row justify-center px-5 md:px-0 mt-15 h-auto w-full font-figtree">
          <Outlet />
        </main>
      </CreateBeneficiaryProvider>
    </>
  );
}

export default CreateBeneficiary;