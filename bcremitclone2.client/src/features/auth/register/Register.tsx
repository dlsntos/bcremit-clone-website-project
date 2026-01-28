//import CreateAccount from "./components/CreateAccount";
import { Outlet } from 'react-router';
import { useReducer } from 'react';
import MainHeader from 'components/header/MainHeader';
import { initialFormData, registerReducer } from './reducer/useRegister';

function Register() {   
  const [formData, dispatch] = useReducer(registerReducer, initialFormData)

  return (
    <div>
      <MainHeader back="/" close="/" title="Registration"/>
      <main className="flex justify-center items-center h-auto mt-12">
        <Outlet context={{ formData, dispatch }} />
      </main>

    </div>
  );
}

export default Register;