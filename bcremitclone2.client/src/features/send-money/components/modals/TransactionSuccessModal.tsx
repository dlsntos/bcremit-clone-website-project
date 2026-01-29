import type { ModalProps } from "../../../../types/modal";
import Button from '../../../../components/ui/Button';
import { useNavigate } from 'react-router';

function TransactionSuccessModal({ successful = false }: ModalProps) {

  const navigate = useNavigate();
  const handleToDashboard = () => {
    navigate("/dashboard");
  }
  return (
    <dialog
      open={successful}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-100"
    >
      <div className="flex flex-col justify-center items-center max-w-xs md:max-w-lg w-full h-[300px] py-10 bg-white text-center rounded-xl">
        <section className="flex flex-row justify-center items-center">
          <h1 className="text-bluewhale text-4xl md:text-6xl font-bold font-figtree">Transaction Successful!</h1>
        </section>
        <section className="w-2/3 ">
          <Button
            onClick={handleToDashboard}
            className="block p-5 mt-5 w-full bg-green-600 text-white text-xl font-semibold rounded-xl shadow-sm transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
          >
            Back to Dashboard
          </Button> 
        </section>
      </div>
    </dialog>
  );
}
  export default TransactionSuccessModal;