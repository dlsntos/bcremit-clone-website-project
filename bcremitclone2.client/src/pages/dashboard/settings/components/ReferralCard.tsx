import Button from "../../../../components/ui/Button";
import giftImage from "assets/3d-present.png";
function ReferralCard() {
  return (
    <div className="flex flex-row items-center p-5 mt-5 w-full max-w-md bg-blue-100 rounded-md transition duration-200 hover:scale-105">
      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl text-bluewhale font-bold">Invite a friend</h2>
        <p className="text-sm sm:text-md text-bluewhale">Get your friend transact with BCRemit and earn referral rewards</p>
        <Button
          className="w-full p-2 sm:p-3 mt-5 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Invite a friend
        </Button>
      </div>
      <div>
        <img src={giftImage} className="h-20 w-40 sm:h-30 sm:w-50" />
      </div>
    </div>
  );
}

export default ReferralCard;