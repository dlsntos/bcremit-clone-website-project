import { useNavigate, useParams } from "react-router";
import Button from "../../../components/ui/Button";

function Step3() {

  const { id } = useParams();
  const beneficiaryID = Number(id);
  const navigate = useNavigate();

  const handleContinuePayment = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/send-money/${beneficiaryID}/confirm-payment`);
  } 

  const handleCancelPayment = () => {
    navigate("/dashboard")
  }
  return (
    <section className="flex flex-col w-full max-w-xs md:max-w-xl mx-auto py-5 gap-2 text-bluewhale">
      <h1 className="text-4xl font-bold mb-4">Important: Protect Yourself from Scams</h1>
      <p className="mb-3 text-lg">Before proceeding with this transaction, please take a moment to consider the following:</p>
      <div className="min-h-fit">
        <ul className="list-disc ml-8 text-lg">
          <li>
            <b>Purchase or Payment for Goods or Services: </b>
            Are you sure the seller is legitimate? Scammers often
            pretend to sell goods or services that don't exist.
          </li>

          <li>
            <b>Investment Opportunities: </b>
            Be wary of "too good to be true`" investment offers.
            Scammers can pose as legitimate investors, promising
            high returns with little risk.
          </li>

          <li>
            <b>First-Time or New Sellers: </b>
            Double-check the authenticity of the seller, especially if it's your first time
            transacting with them. Always verify their legitimacy, look for reviews,
            and ensure the seller is trustworthy before proceeding.
          </li>

          <li>
            <b>Romance or Love Interest: </b>
            Be cautious of transferring money to someone you've met online or through social media.
            Romance scams are common, where fraudsters use emotional manipulation.
          </li>

          <li>
            <b>Invoice or Bill Payments: </b>
            Verify that the invoice or bill is from a trusted and known source.
          </li>

          <li>
            <b>Friends and Family Requests: </b>
            Always confirm with the person directly before sending money if you receive an unexpected request.
          </li>

          <li>
            <b>Solicitor or Rental Fees:  </b>
            Make sure you are dealing with a registered and verified legal entity, particularly when transferring large amounts.
          </li>
        </ul>
      </div>

      <div className="sticky bottom-0 pb-4 pt-6 bg-white text-xs">
        <p className="mb-5">
          If any part of this transaction feels suspicious, take the time to stop and review.
          Once the money is sent, it may not be recoverable.
        </p>

        <p className="mb-5">
          By pressing "Continue," you confirm that you have carefully read and fully understood the warning
          messages provided regarding potential scams, including but not limited to payment, investment, romance,
          or impersonation scams. You acknowledge that you have double-checked and verified the recipient's information,
          confirming the legitimacy of this transaction. Furthermore, you accept full responsibility for proceeding, understanding
          that once the transaction is completed, BCRemit cannot recover funds if they are sent to a fraudulent recipient.
        </p>
        <div className="flex flex-col gap-2">
          <Button
            onClick={handleContinuePayment}
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
      </div>
    </section>
  );
}

export default Step3;

