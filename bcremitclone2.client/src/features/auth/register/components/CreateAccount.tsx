/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useOutletContext, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import type { RegisterContext } from 'types/RegistrationFormDataType';
import Button from 'components/ui/Button';
import type { RegisterFormData } from 'types/form';
import { submitAccountStep } from '../api/register.api';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { countryOptions, dialCodeOptions } from 'data/selectOptions';

function CreateAccount (){
  const { formData, dispatch } = useOutletContext<RegisterContext>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const formattedPhone = `${formData.contactInfo.dialCode === "PH" ? "+63" : "+44"}${formData.contactInfo.mobileNumber}`;

  const handleChange = (section: keyof RegisterFormData, field: string | undefined, value: string) => {
    dispatch({ type: "UPDATE_FIELD", section, field, value });
  };

  
  useEffect(() => {
    console.log("formData changed:", formData);
  }, [formData]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!formData.registrationAccountInfo.email) {
      setError("Email is required")
      return;
    }

    try {
      setLoading(true);
      const res = await submitAccountStep({
        email: formData.registrationAccountInfo.email,
        password: formData.registrationAccountInfo.password,
        confirmPassword: formData.registrationAccountInfo.confirmPassword,
        country: formData.personalInfo.country,
        dialCode: formData.contactInfo.dialCode,
        phoneNumber: formattedPhone,
      });
      localStorage.setItem('token', res.data.token);
      return navigate('./setup-information');

    } catch (err: any) {
      setError(err.response?.data?.message ?? 'Failed to save account');
    } finally {
      setLoading(false);
    }

  }

    
  return (
    <div className="h-full flex flex-col max-w-sm md:max-w-md px-10 md:px-0">

      <section className="flex flex-col text-center mt-10">
        <h1 className="text-2xl md:text-4xl text-bluewhale font-bold">
          Create an Account
        </h1>
        <p className="text-md md:text-lg text-gray-500">
          For security purposes we need a few more details to prove that you're a real person.
        </p>
      </section>

      <section>
        <form
          onSubmit={handleRegister}
          className="flex flex-col mt-10">
          {/** Select your country **/}
          <label
            htmlFor="country"
            className="font-medium"
          >
            Select your Country
          </label>
          <div className="flex flex-row gap-2">
            <select
              id="country"
              value={formData.personalInfo.country}
              onChange={(e) => handleChange("personalInfo", "country", e.target.value)}
              name="country"
              className="grow p-3 border-2 border-gray-300 rounded-lg">
              {countryOptions.map((country) => (
                <option
                  key={country.value}
                  value={country.value}
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          {/** Email inputs **/}
          <div className="flex flex-row justify-between mt-5 gap-1">
            <div className="flex flex-col w-1/2 md:w-full">
              <label
                htmlFor="email"
                className="font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.registrationAccountInfo.email}
                onChange={(e) => handleChange("registrationAccountInfo", "email", e.target.value)}
                type="email"
                placeholder="Email"
                className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>

            <div className="flex flex-col w-1/2 md:w-full">
              <label
                htmlFor="confirm-email"
                className="font-medium"
              >
                Confirm Email
              </label>
              <input
                id="confirm-email"
                name="confirm-email"
                type="email"
                value={formData.registrationAccountInfo.confirmEmail}
                onChange={(e) => handleChange("registrationAccountInfo", "confirmEmail", e.target.value)}
                placeholder="Confirm Email"
                required
                className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/** Password inputs **/}
          <div className="flex flex-row justify-between mt-5 gap-1">

            <div className="relative flex flex-col w-1/2 md:w-full">
              <label
                htmlFor="password"
                className="font-medium"
              >
                Password
              </label>
              <Button
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-1 translate-y-9 px-1 bg-white z-10000"
              >
                {showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Button>
              <input
                id="password"
                name="password"
                value={formData.registrationAccountInfo.password}
                onChange={
                  (e) => handleChange("registrationAccountInfo", "password", e.target.value)
                }
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="p-3 pr-5 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              />
            </div>
            <div className="relative flex flex-col w-1/2 md:w-full">
              <label
                htmlFor="confirm-password"
                className="font-medium"
              >
                Confirm Password
              </label>
              <Button
                onClick={() => setShowConfirmPassword(prev => !prev)}
                className="absolute right-1 translate-y-9 px-1 bg-white z-10000"
              >
                {showConfirmPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Button>
              <input
                id="confirm-password"
                name="confirm-password"
                value={formData.registrationAccountInfo.confirmPassword}
                onChange={
                  (e) => handleChange("registrationAccountInfo", "confirmPassword", e.target.value)
                }
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="p-3 pr-5 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              />

            </div>
          </div>

          {/** Phone number input **/}
          <div className="flex flex-col mt-5 w-full">
            <label
              htmlFor="mobile-number"
              className="font-medium"
            >
              Mobile Number
            </label>
            <div className="flex flex-row gap-1">
              <select
                id="dial-code"
                name="dial-code"
                value={formData.contactInfo.dialCode}
                onChange={
                  (e) => handleChange("contactInfo", "dialCode", e.target.value)

                }
                className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              >
                {dialCodeOptions.map((dialCode) => (
                  <option
                    key={dialCode.value}
                    value={dialCode.value}
                  >
                    {dialCode.label}
                  </option>
                ))}
              </select>
              <input
                id="mobile-number"
                name="mobile-number"
                value={formData.contactInfo.mobileNumber}
                onChange={
                  (e) => handleChange("contactInfo", "mobileNumber", e.target.value)
                }
                type="tel"
                inputMode="numeric"
                placeholder="Mobile Number"
                required
                className="flex-1 p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              />
            </div>
          </div>
          <Button
            type={"submit"}
            disabled={loading}
            className={
              `mt-5 p-3 text-center text-white font-medium rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-400
            ${loading ? "bg-gray-500" : "bg-blue-500 cursor-pointer"}
            `
            }
          >
            {loading ? 'Saving...' : 'Register'}
          </Button>
        </form>
      </section>

      <section>
        <p className="mt-2 text-sm text-center">
          By clicking Register, you agree with BCRemit's
          <Link to="#" className="text-blue-600"> Terms & Conditions </Link>
          and
          <Link to="#" className="text-blue-600"> Privacy Policy</Link>
        </p>
      </section>

    </div>
  );
}

export default CreateAccount;