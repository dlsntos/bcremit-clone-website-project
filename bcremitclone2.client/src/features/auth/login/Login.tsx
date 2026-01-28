import MainHeader from 'components/header/MainHeader';
import LoginForm from 'features/auth/login/components/LoginForm';
import AuthProvider from '../provider/AuthProvider';

function Login (){

  return (
    <>
      <AuthProvider>
        <MainHeader back="/" close="/" title="Login" />
        <LoginForm />
      </AuthProvider>
    </>
  );
}

export default Login;