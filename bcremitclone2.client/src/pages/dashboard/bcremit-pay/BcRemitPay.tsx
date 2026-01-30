import { bcRemitPayCardData } from "../../../data/cardData/bcremitPayCardData";
import BcremitPayCard from "./components/BcremitPayCard";
function BcRemitPay() {
  return (
    <div className="px-8">
      <section className="text-start">
        <h1 className="mt-12 max-w-sm text-5xl font-extrabold text-bluewhale">BCRemit-Pay</h1>
        <p className="w-full max-w-sm text-xl text-gray-500">You can now pay your contributions and other payments using BCRemit-Pay!</p>
      </section>
      <section className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,350px))] auto-rows-[15rem] md:auto-rows-[15rem] place-content-start gap-10">
        {bcRemitPayCardData.map((cardData) => (
          <BcremitPayCard
            title={cardData.title!}
            description={cardData.description!}
            buttonName={cardData.title!}
            icon={""}
            cardImage={cardData.cardImage!}
          />
        ))}
      </section>
    </div>
  );
}

export default BcRemitPay;