import { useNavigate } from "react-router";
import Button from "../../../../../components/ui/Button";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
interface UpdateSuccesfulModalProps {
  successful: boolean;
  onClose: () => void;
}

function UpdateSuccessfulModal({ successful = false, onClose }: UpdateSuccesfulModalProps) {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <dialog
      open={successful}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-100"
    >
      <div className="flex flex-col justify-between items-center max-w-lg w-full h-[300px] py-10 bg-white text-center rounded-xl">
        <section>
          <CheckCircleIcon
            sx={{
              color: "green",
              fontSize: "90px",
              marginBottom: "10px",
            }}
          />
          <h1 className="text-bluewhale text-xl font-bold font-figtree">Update Successful!</h1>
          <p className="text-md text-gray-500">You have updated this beneficiary successfully.</p>
        </section>

        <section className="flex flex-row justify-center gap-3">
          <Button
            onClick={onClose}
            className="px-5 py-3 bg-gray-200 text-bluewhale font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-gray-300"
          >
            Close
          </Button>
          <Button
            onClick={handleGoToDashboard}
            className="px-5 py-3 bg-blue-500 text-white font-semibold rounded-md cursor-pointer transition duration-300 hover:bg-gray-300"
          >
            Go to Dashboard
          </Button>
        </section>
      </div>

    </dialog>
  );
}

export default UpdateSuccessfulModal;