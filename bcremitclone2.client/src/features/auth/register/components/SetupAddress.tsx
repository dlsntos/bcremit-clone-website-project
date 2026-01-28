/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import type { RegisterContext } from 'types/RegistrationFormDataType';
import type { RegisterFormData } from 'types/form';
import { submitAddressStep } from '../api/register.api';
import Button from 'components/ui/Button';

function SetupAddress (){

  const { formData, dispatch } = useOutletContext<RegisterContext>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (section: keyof RegisterFormData, field: string | undefined, value: string) => {
    dispatch({ type: "UPDATE_FIELD", section, field, value });
  };

  const handleNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      await submitAddressStep({
        addressLineOne: formData.addressInfo.addressLineOne,
        addressLineTwo: formData.addressInfo.addressLineTwo,
        cityOrTown: formData.addressInfo.cityOrTown,
        postCode: formData.addressInfo.postalCode,
      });
      return navigate("/dashboard");

    } catch (err: any) {
      setError(err.response?.data?.message ?? 'Failed to save account');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("formData changed:", formData);
  }, [formData]);

  return (
    <div className="h-full flex flex-col max-w-sm md:max-w-md px-10 md:px-0">

      <section className="flex flex-col text-center mt-10">
        <h1 className="text-2xl md:text-4xl text-bluewhale font-bold">
          Setup your Address
        </h1>
        <p className="p-2 text-sm lg:text-lg md:text-md text-gray-500">
          Financial Institutions verify personal information to comply with the law and combat terrorism funding and money laundering.
        </p>
      </section>

      <section>
        <form
          onSubmit={handleNext}
          className="flex flex-col mt-10 gap-3"
        >
          <div className="flex flex-col">
            <label
              htmlFor="address-line-1"
              className="font-semibold"
            >
              Address Line 1
            </label>
            <input
              type="text"
              value={formData.addressInfo.addressLineOne}
              onChange={(e) => handleChange("addressInfo", "addressLineOne", e.target.value)}
              placeholder="Enter your Address"
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address-line-2"
              className="font-semibold"
            >
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              value={formData.addressInfo.addressLineTwo}
              onChange={(e) => handleChange("addressInfo", "addressLineTwo", e.target.value)}
              placeholder="Apt/suite/unit/building/floor"
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="city-town"
              className="font-semibold"
            >
              City/Town
            </label>  
            <input
              type="text"
              value={formData.addressInfo.cityOrTown}
              onChange={(e) => handleChange("addressInfo", "cityOrTown", e.target.value)}
              placeholder="City/Town"
              required
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="post-code"
              className="font-semibold"
            >
              Post Code
            </label>
            <input
              type="text"
              value={formData.addressInfo.postalCode}
              onChange={(e) => handleChange("addressInfo", "postalCode", e.target.value)}
              placeholder="Post Code"
              required
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <Button
            type="submit"
            className={
              `p-3 text-center text-white font-medium rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-400
            ${loading ? "bg-gray-500" : "bg-blue-500 cursor-pointer"}
            `
            }
          >
            {loading ? 'Saving...' : 'Next'}
          </Button>
        </form>
      </section>
    </div>
  );
}

export default SetupAddress;