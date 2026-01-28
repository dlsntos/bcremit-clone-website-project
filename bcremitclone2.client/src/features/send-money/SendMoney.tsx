import MainHeader from "../../components/header/MainHeader";
import { Outlet } from 'react-router';

const SendMoney = () => {
  return (
    <>
      <MainHeader title="Send Money" back="/dashboard" close="/dashboard" />
      <main className="w-full mt-20 font-figtree">
        <Outlet />
      </main>
    </>
  );
}

export default SendMoney;