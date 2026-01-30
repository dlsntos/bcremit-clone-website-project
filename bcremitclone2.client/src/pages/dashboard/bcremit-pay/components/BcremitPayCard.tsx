import Button from "../../../../components/ui/Button";
interface CardProps {
  title: string;
  description: string;
  buttonName: string;
  icon?: React.ReactNode;
  cardImage?: string;
}
function BcremitPayCard({ title, description, buttonName, icon, cardImage }: CardProps) {
  return (
    <>
      <div
        className="flex flex-col p-5 w-full h-auto max-w-[400px] h-48 justify-between bg-white rounded-lg shadow-md cursor-pointer transition duration-300 hover:scale-110"
      >
        <div className="flex flex-col">
          <img src={cardImage} className="h-8 w-8" />
          <h1 className="text-bluewhale text-2xl font-bold">{title}</h1>
          <p className="text-md text-gray-500 mt-2"> {description} </p>
        </div>
        <Button
          className="block flex flex-row justify-center items-center p-3 gap-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
        >
          {icon}
          {buttonName}
        </Button>
      </div>
    </>
  );
}

export default BcremitPayCard;