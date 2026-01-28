import Button from "../../../../components/ui/Button";
import giftImage from "assets/3d-present.png";
function ReferralCard() {
  return (
    <div className="flex flex-row items-center p-5 mt-5 w-full max-w-md bg-blue-100 rounded-md transition duration-200 hover:scale-105">
      <div className="w-full">
        <h2 className="text-3xl text-bluewhale font-bold">Invite a friend</h2>
        <p className="text-bluewhale">Get your friend transact with BCRemit and earn referral rewards</p>
        <Button
          className="w-full p-3 mt-5 bg-blue-500 text-white rounded-md cursor-pointer"
        >
          Invite a friend
        </Button>
      </div>
      <div>
        <img src={giftImage} className="h-30 w-50" />
      </div>
    </div>
  );
}

export default ReferralCard;