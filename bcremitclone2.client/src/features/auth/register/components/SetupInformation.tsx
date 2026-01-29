/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useOutletContext } from 'react-router';
import type { RegisterContext } from 'types/RegistrationFormDataType';
import { useEffect, useState } from 'react';
import type { RegisterFormData } from 'types/form';
import Button from 'components/ui/Button';
import { submitPersonalInfoStep } from '../api/register.api';
import { sourceOfFundsOptions } from '../../../../data/selectOptions';

function SetupInformation () {
  const { formData, dispatch } = useOutletContext<RegisterContext>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentYear = new Date().getFullYear();
  const years: number[] = Array.from({ length: currentYear - 1900 - 1 }, (_, i) => currentYear - i);

  const handleChange = (section: keyof RegisterFormData, field: string | undefined, value: string) => {
    dispatch({ type: "UPDATE_FIELD", section, field, value });
  };

  useEffect(() => {
    console.log("formData changed:", formData);
  }, [formData]);

  const handleNext = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      const { day, month, year } = formData.birthDate;

      if (!day || !month || !year || day === "day" || month === "month" || year === "year") {
        setError("Please select a valid birth date");
        setLoading(false);
        return;
      }

      const monthNumber = (months.indexOf(month) + 1).toString().padStart(2, "0");

      const dayNumber = day.toString().padStart(2, "0");

      const formattedBirthData = new Date(`${year}-${monthNumber}-${dayNumber}T00:00:00`).toISOString();

      await submitPersonalInfoStep(
        {
        firstName: formData.personalInfo.firstName,
        middleName: formData.personalInfo.middleName,
        lastName: formData.personalInfo.lastName,
          birthDate: formattedBirthData,
        sourceOfFunds: formData.personalInfo.sourceOfFunds,
        }
      );
      return navigate("../setup-address");
    } catch (err: any) {
      setError(err.response?.data?.message ?? 'Failed to save account');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col max-w-sm md:max-w-md px-10 md:px-0">
      <section className="flex flex-col text-center mt-10">
        <h1 className="text-2xl md:text-4xl text-bluewhale font-bold">
          Setup Your Information
        </h1>
        <p className="p-2 text-sm md:text-md text-gray-500">
          Financial Institutions verify personal information to comply with the law and combat terrorism funding and money laundering.
        </p>
      </section>

      <section>
        <form
          onSubmit={handleNext}
          className="flex flex-col mt-10 gap-3">

          <div className="flex flex-col">
            <label
              htmlFor="first-name"
              className="font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              value={formData.personalInfo.firstName}
              onChange={(e) => handleChange("personalInfo", "firstName", e.target.value)}
              placeholder="First Name"
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              required
            />
            {error && <p className="text-red-500">{error}</p>}

          </div>

          <div className="flex flex-col">
            <label
              htmlFor="middle-name"
              className="font-semibold"
            >
              Middle Name (Optional)
            </label>
            <input
              type="text"
              id="middle-name"
              name="middle-name"
              value={formData.personalInfo.middleName}
              onChange={(e) => handleChange("personalInfo", "middleName", e.target.value)}
              placeholder="Middle Name (Optional)"
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg" />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="last-name"
              className="font-semibold"
            >Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value={formData.personalInfo.lastName}
              onChange={
                (e) => handleChange("personalInfo", "lastName", e.target.value)
              }
              placeholder="Last Name"
              className="p-3 border-2 border-gray-300 focus:outline-2 outline-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <fieldset className="flex flex-row gap-1">
              <legend className="font-semibold">
                Birth Date
              </legend>
              <select
                id="day"
                name="day"
                value={formData.birthDate.day}
                onChange={(e) => handleChange("birthDate", "day", e.target.value)}
                className="grow p-3 border-2 border-gray-300 rounded-lg"
              >
                <option value="day">Day</option>
                {days.map((day) => (
                  <option
                    key={day}
                    value={day}
                  >
                    {day}
                  </option>
                ))}
              </select>

              <select
                id="month"
                name="month"
                value={formData.birthDate.month}
                onChange={(e) => handleChange("birthDate", "month", e.target.value)}
                className="grow p-3 border-2 border-gray-300 rounded-lg"
              >
                <option value="month">
                  Month
                </option>
                {months.map((month) => (
                  <option
                    key={month}
                    value={month}
                  >
                    {month}
                  </option>
                ))}
              </select>

              <select
                id="year"
                name="year"
                value={formData.birthDate.year}
                onChange={(e) => handleChange("birthDate", "year", e.target.value)}
                className="grow p-3 border-2 border-gray-300 rounded-lg"
              >
                <option value="year">Year</option>
                {years.map((year) => (
                  <option
                    key={year}
                    value={year}
                  >
                    {year}
                  </option>
                ))}
              </select>
            </fieldset>
          </div>

          <div>
            <label
              htmlFor="source-of-funds"
              className="font-semibold"
            >
              Select your Source of Funds
            </label>
            <select
              id="source-of-funds"
              name="source-of-funds"
              value={formData.personalInfo.sourceOfFunds}
              onChange={(e) => handleChange("personalInfo", "sourceOfFunds", e.target.value)}
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg"
            >
              <option value="source-of-funds">Select your Source of Funds</option>
              {sourceOfFundsOptions.map((source) => (
                <option
                  key={source}
                  value={source}
                >
                  {source}
                </option>
              ))}
            </select>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <Button
            type={"submit"}
            className={
              `p-3 text-center text-white font-medium rounded-lg transition duration-300 ease-in-out rounded-md hover:bg-gray-300
            ${loading ? "bg-gray-500" : "bg-blue-500 cursor-pointer"}
            `
            }
          >
            {loading ? 'Saving...' : 'Next'}
          </Button>
          <p className="text-sm md:text-md text-center text-gray-500 font-semibold">
            Required by law to collect this information
          </p>
        </form>
      </section>

    </div>
  );
}

export default SetupInformation;