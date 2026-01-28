import Button from 'components/ui/Button';
import { Link , useNavigate} from 'react-router';
import { useAuth } from '../../context/useAuth';
import { useState } from 'react';
import TextInput from '../../../../components/ui/TextInput';
//import { useLoginContext } from 'features/auth/login/context/UserLoginContext';
function LoginForm () {

  const navigate = useNavigate();
  //const { formData, setFormData } = useLoginContext();
  const [loading, setLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const arrow = '\u2192';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      setLoading(true);
      await login(formData);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  function handleForgotPassword() {
    console.log("");  
  }

  return (
    <main className="login-wrapper h-auto font-figtree">
      <div className="login-contents flex flex-col items-center mt-25 h-full">
        <div className="w-full max-w-lg px-4">

          <section className="flex flex-col items-center mt-5">
            <h1 className="text-4xl text-bluewhale font-bold">
              Welcome Back!
            </h1>
            <p className="text-md text-gray-500 p-1">
              Log in your account to continue.
            </p>
          </section>

          <section className="p-5 mt-5">
            <form
              onSubmit={ handleLogin }
              className="flex flex-col gap-2">

              <TextInput
                label={{
                  htmlFor: "email",
                  labelName: "Email"
                }}
                input={{
                  id: "email",
                  name: "email",
                  type: "text",
                  value: formData.email,
                  onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                  placeholder: "Email",
                  required: true
                }}
              />

              <TextInput
                label={{
                  htmlFor: "password",
                  labelName: "Password"
                }}
                input={{
                  id: "password",
                  name: "password",
                  type: "password",
                  value: formData.password,
                  onChange: (e) => setFormData({ ...formData, password: e.target.value }),
                  placeholder: "Password",
                  required: true
                }}
              />
              
              <div className="flex flex-row items-center gap-2 h-20 w-[70%] px-2 text-center border-1">
                <input
                  type="checkbox"
                  name="recaptcha" />
                <span>reCaptcha placeholder</span>
              </div>

              <div className="flex flex-col mt-5 gap-2 text-center">
                <Button
                  onClick={handleLogin}
                  className={
                    `p-3 text-white font-semibold border-1 rounded-lg transition duration-300 ease-in-out cursor-pointer hover:bg-gray-300
                    ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 cursor-pointer"}
                    `
                  }
                  disabled={loading}
                >
                  {loading ? `Log in ${arrow}` : `Log in ${arrow}`}
                </Button >
                <Button
                  onClick={handleForgotPassword}
                  className="p-3 bg-white text-blue-500 font-semibold border-1 border-blue-500 transition duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white"
                >
                  Forgot Password 
                </Button>
                <span className="mt-4">
                  Not yet registered?
                  &nbsp;
                  <Link
                    to="/register"
                    className="text-blue-500"
                  >
                    Create an Account
                  </Link>
                </span>
              </div>
            </form>
          </section>

        </div>
      </div>

    </main>
  );
}

export default LoginForm;