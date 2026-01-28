import heroBackground from 'assets/hero-asset.webp';
import Button from 'components/ui/Button';
import { useNavigate } from 'react-router';

const MockApp = () => {

  const pesoSign = '\u20B1';
  const gbpSign = '\u00A3';
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("register");
  }

  return (
    <div className="mock-app relative flex flex-col items-center w-full mt-6 bg-white">
      <img src={heroBackground} className="hidden md:block absolute z-1 h-full" />
      <div className="flex flex-col w-full max-w-sm gap-5 bg-white shadow-lg rounded-b-lg z-1000">

        <div className="w-full h-full bg-blue-500 rounded-t-lg">
          <div className="relative flex flex-col items-center m-auto px-5 py-4">
            <span className="text-2xl text-white font-semibold"> {pesoSign}69.50 = {gbpSign}1.00</span>
            <span className="text-sm text-white">Buying rate</span>
          </div>
        </div>

        <form className="flex flex-col p-5 gap-5">

          <div className="font-semibold">
            <label>Send Amount</label>
            <br></br>
            <div className="flex flex-row justify-between gap-3">
              <input type="text" placeholder="Enter Amount" value="500.00" className="w-full p-2 border-2 border-gray-300 outline-gray-300 rounded-lg focus:outline-3"></input>
              <select disabled className="pl-11 pr-6 border-2 border-gray-300 rounded-lg appearance-none">

                <option>PHP</option>

              </select>
            </div>
          </div>

          <div className="font-semibold">
            <label>Received Amount</label>
            <br></br>
            <div className="flex flex-row justify-between gap-3">
              <input type="text" placeholder="Enter Amount" value="7.21" className="w-full p-2 border-2 border-gray-300 outline-gray-300 rounded-lg focus:outline-3"></input>

              <select className="relative pl-10 pr-6 border-2 border-gray-300 rounded-lg outline-gray-300 appearance-none">
                <option>GBP</option>
                <option>EUR</option>
                <option>USD</option>
                <option>CAD</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Delivery Option</label>
            <select className="relative px-3 py-3 border-2 border-greenblue rounded-lg appearance-none">
              <option>Credit to Bank Account</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold">Pay with</label>
            <select className="relative px-3 py-3 border-2 border-greenblue rounded-lg appearance-none">
              <option>Online Bank Transfer</option>
            </select>
          </div>

          <div className="px-5 pb-5">
            <div className="flex flex-row justify-between text-md">
              <span>Fee</span>
              <span>{pesoSign}500</span>
            </div>
            <div className="flex flex-row justify-between text-xl font-semibold">
              <span>Total Pay</span>
              <span>{pesoSign}1,000</span>
            </div>
          </div>
        </form>
      </div>
      <Button
        onClick={handleGetStarted}
        className="w-full max-w-sm mt-5 py-3 bg-blue-500 text-white font-semibold rounded-md z-100 transition duration-300 ease-in-out rounded-md hover:bg-gray-300 cursor-pointer"
      >
        Get Started
      </Button>
    </div>
  );
}

export default MockApp;