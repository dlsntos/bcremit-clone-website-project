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
  const { id } = useParams();
  const beneficiaryID = Number(id);
  const [transaction, setTransaction] = useState<TransactionData>();
  const navigate = useNavigate();

  const handleConfirmPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post(`transactions/${beneficiaryID}/confirm-payment`);
    } catch (err) {
      console.error(err)
    }
    navigate("/dashboard");
  }

  const handleCancelPayment = () => {
    navigate("/dashboard")
  }

  useEffect(() => {
    const getTransactionSummary = async () => {
      const res = await api.get(`/transactions/${beneficiaryID}/confirm-payment`);
      setTransaction(res.data);
    };
    getTransactionSummary();
  }, [beneficiaryID])

  return (
    <section className="w-full max-w-xs md:max-w-md mx-auto">
      <p className="block text-lg text-center mt-25 leading-6">
        Your transaction to the <b className="text-blue-500">Philippines</b> for <b className="text-blue-500">{transaction?.total}</b> is awaiting payment.
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
              <td className="font-medium text-bluewhale">{transaction?.senderBank.accountName}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Sort Code:</th>
              <td className="font-medium text-bluewhale">{transaction?.senderBank.sortCode}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Number:</th>
              <td className="font-medium text-bluewhale">{transaction?.senderBank.accountNumber}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Reference:</th>
              <td className="font-bold text-bluewhale">{transaction?.senderBank.reference}</td>
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
              <td className="font-medium text-bluewhale">{transaction?.beneficiaryBank.accountName}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Sort Code:</th>
              <td className="font-medium text-bluewhale">{transaction?.beneficiaryBank.sortCode}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Account Number:</th>
              <td className="font-medium text-bluewhale">{transaction?.beneficiaryBank.accountNumber}</td>
            </tr>

            <tr className="flex justify-between px-4 py-2 border-b-1 border-gray-200">
              <th className="font-medium">Reference:</th>
              <td className="font-bold text-bluewhale">{transaction?.beneficiaryBank.reference}</td>
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