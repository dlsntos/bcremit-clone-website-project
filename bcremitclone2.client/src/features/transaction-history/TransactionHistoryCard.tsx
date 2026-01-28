  import Button from "../../components/ui/Button";
import phFlag from "../../assets/flag-icon-round/philippines-rounded.png"

function TransactionHistoryCard () {

  const handleViewDetails = () => {
    console.log("View Details");
  }

  return (
    //transaction history card static for now
    //add automated generated transaction id
    //payment status to be changed later to dynamic
    //Add a modal after click view details
    <div className="flex flex-col p-5  gap-2 rounded-lg shadow-md transition duration-300 hover:scale-105">
      <span className="py-1 px-3 w-auto max-w-[11rem] bg-red-500 text-white rounded-2xl"> X Awaiting Payment</span>
      <div className="flex flex-row items-center gap-2">
        <img src={phFlag} className="h-8" />
        <h2 className="text-2xl font-bold">Test User</h2>
      </div>
      <p
        className="text-xl"
      >
        Transaction No.
        <span className="text-bluewhale font-medium"> -PHUK11111</span>
      </p>
      <p
        className="text-xl"
      >
        Total Payment -
        <span className="text-bluewhale font-medium">2.99</span>
      </p>
      <Button
        onClick={handleViewDetails}
        className="p-3 bg-blue-500 text-white rounded-lg transition duration-300 cursor-pointer hover:bg-gray-400"
      >
        View Details
      </Button>
    </div>
  );
}

export default TransactionHistoryCard;