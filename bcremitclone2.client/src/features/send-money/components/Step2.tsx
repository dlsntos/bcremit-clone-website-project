import { useNavigate, useParams } from "react-router";
import Button from "../../../components/ui/Button";
import SelectInput from "../../../components/ui/SelectInput";
import { remittanceOptions } from "../../../data/selectOptions";

function Step2() {
  const { id } = useParams();
  const beneficiaryID = Number(id);
  const navigate = useNavigate();

  const handleNextPage = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/send-money/${beneficiaryID}/security-acknowledgement`);
  }
  return (
    <div className="flex flex-col w-full max-w-xs md:max-w-md mx-auto py-5 gap-2">
      <section className="p-5 text-center">
        <h1 className="text-3xl text-bluewhale font-bold">
          Transaction Summary
        </h1>
        <p className="mt-1 mx-auto max-w-xs text-gray-500">
          Please make sure your transaction details are correct.
        </p>
      </section>

      <section>
        {/*{Add Dynamic Data Later }*/}
        <table className="bg-gray-100 w-full shadow-xs">
          <tbody className="w-full">

            <tr className="flex justify-between p-4 border-b-1 border-gray-200">
              <th className="font-medium">Beneficiary Name</th>
              <td className="font-medium">Test</td>
            </tr>

            <tr className="flex justify-between p-4 border-b-1 border-gray-200">
              <th className="font-medium">Send Amount</th>
              <td className="font-medium">1.00</td>
            </tr>

            <tr className="flex justify-between p-4 border-b-1 border-gray-200">
              <th className="font-medium">Online Bank Transfer Fee</th>
              <td className="font-medium">2.99</td>
            </tr>

            <tr className="flex justify-between p-4 border-b-1 border-gray-200">
              <th className="font-medium">Promo</th>
              <td className="font-medium">- 2.99</td>
            </tr>

            <tr className="flex justify-between p-4 border-t-1 border-gray-200">
              <th className="text-bluewhale font-semibold">Total Payment</th>
              <td className="text-bluewhale text-lg font-bold">1.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <form
          onSubmit={handleNextPage}
          className="mt-5 w-full"
        >
          {/*{Selector attributes to be replaced later }*/}
          <SelectInput
            label={{
              htmlFor: "remittance-type",
              labelName: "Purpose of Remittance"
            }}

            select={{
              id: "remittance-type",
              name: "remittanceType",
              value: "",
              //onChange: handleChange,
            }}

            option={{
              optionItems: remittanceOptions,
            }}
          />
          <p className="p-3 text-center">Required by law to collect this information</p>

          <Button
            className="block p-3 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
          >
            Next
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Step2;