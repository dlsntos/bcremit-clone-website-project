import { useNavigate, useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { useEffect, useState } from "react";
import api from "../../../api/axios";

export interface BankInfo {
  bankName: string;
  accountName: string;
  sortCode: string;
  accountNumber: string;
  reference: string;
}

export interface TransactionData {
  senderBank: BankInfo;
  beneficiaryBank: BankInfo;
  amount: number;
  fee: number;
  total: number;
}


function Step4() {
  //const { id } = useParams();
  //const beneficiaryID = Number(id);
  const [transaction, setTransaction] = useState<TransactionData>();
  const navigate = useNavigate();

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(``);
  }

  const handleCancelPayment = () => {
    navigate("/dashboard")
  }

  useEffect(() => {
    const getTransactionSummary = async () => {
      const res = await api.get("/transactions/0afbff99-d4e2-4c99-8782-351981f79579/confirm-payment");
      setTransaction(res.data);
    };
    getTransactionSummary();
  }, [])

  return (
    <section className="w-full max-w-xs md:max-w-md mx-auto">
      <p className="block text-lg text-center mt-25 leading-6">
        Your transaction to the <b className="text-blue-500">Philippines</b> for <b className="text-blue-500">1.00</b> is awaiting payment.
        Please complete your Online Bank Transfer making sure to indicate your unique Reference.
      </p>

      <div>
        <table className="w-full shadow-xs">
          <thead className="p-3">
            <tr>
              <th className="text-left text-sm text-gray-500 p-3 font-semibold">
                -Transfer To
              </th>
            </tr>
          </thead>
          <tbody className="bg-lightblue w-full">
            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Name:</th>
              <td className="font-medium text-bluewhale">{transaction?.senderBank.bankName}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Sort Code:</th>
              <td className="font-medium text-bluewhale">04 05 11</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Number:</th>
              <td className="font-medium text-bluewhale">00040511</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Reference:</th>
              <td className="font-bold text-bluewhale">JL09487474</td>
            </tr>
          </tbody>
        </table>

        <table className="w-full shadow-xs">
          <thead className="p-3">
            <tr>
              <th className="text-left text-sm text-gray-500 p-3 font-semibold">
                -Transfer To
              </th>
            </tr>
          </thead>
          <tbody className="bg-lightblue w-full">
            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Name:</th>
              <td className="font-medium text-bluewhale">BDO</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Sort Code:</th>
              <td className="font-medium text-bluewhale">04 05 11</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Number:</th>
              <td className="font-medium text-bluewhale">00040511</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Reference:</th>
              <td className="font-bold text-bluewhale">JL09487474</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col mt-5 gap-2">
        <Button
          onClick={handleConfirmPayment}
          className="block p-3 w-full bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-sm transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
        >
          I Understand & Continue Payment
        </Button>
        <Button
          onClick={handleCancelPayment}
          className="block p-3 w-full bg-gray-300 text-bluewhale text-sm font-semibold rounded-lg shadow-sm transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
        >
          Cancel
        </Button>
      </div>
    </section>
  );
}

export default Step4;