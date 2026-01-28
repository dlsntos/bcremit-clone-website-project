import Select, { type StylesConfig } from 'react-select';
import Button from '../../../components/ui/Button';
import { countryRecipientOptions, countrySendAmountOptions, type Option } from '../../../data/selectOptions';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { useLocation, useNavigate, useParams } from 'react-router';
import { gbpToPhpConversions } from '../helper/currencyConversion';
import { useState } from 'react';
import api from '../../../api/axios';

interface beneficiaryDetailsLocationState {
  fullName: string,
  deliveryOption: string,
}
interface TransactionPayload {
  sendAmount: string,
  paymentMethod: string,
};
function Step1() {

  const [transaction, setTransaction] = useState<TransactionPayload>({
    sendAmount: "",
    paymentMethod: "",
  });

  const location = useLocation();
  const { fullName } = location.state as beneficiaryDetailsLocationState;

  const gbp = '\u00A3';
  const php = '\u20B1';

  const { id } = useParams();
  const beneficiaryID = Number(id);

  const navigate = useNavigate();


  const createTransaction = async () => {
    try {

      const payload = {
        amount: parseFloat(transaction.sendAmount),
        paymentMethod: transaction.paymentMethod,
      };

      await api.post(`transactions/${beneficiaryID}`);
      const res = await api.put(`transactions/${beneficiaryID}/payment`, payload);

      return res.data; 
    } catch (err) {
      console.log(err);
    }

  }; 

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTransaction();
    navigate(`/send-money/${beneficiaryID}/transaction-summary`);
  }

  const selectorStyles: StylesConfig<Option> = {
    control: (styles) => ({
      ...styles,
      borderRadius: '5px',
      paddingTop: '2px',
      paddingBottom: '2px',
      boxShadow: 'grey',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "sendAmount") {
      newValue = newValue.replace(/[^\d.]/g, '');
      const parts = newValue.split('.');
      if (parts.length > 2) newValue = parts[0] + '.' + parts[1];
      if (!newValue.startsWith('0.')) newValue = newValue.replace(/^0+/, '');
    }

    setTransaction(prev => ({
      ...prev,
      [name]: newValue,
    }));
  };
  return (
    <div className="flex flex-col w-full max-w-xs md:max-w-md mx-auto py-5 gap-2">

      <section className="flex flex-col items-center">
        <div className="flex justify-center items-center h-10 w-10 bg-blue-500 rounded-full">
          <span className="text-white text-2xl font-bold">T</span>
        </div>
        <p className="text-gray-500 font-normal">You are sending to-</p>
        <h2 className="text-2xl font-bold">{fullName}</h2>
      </section>

      <section>
        <form
          className="flex flex-col gap-2"
        >
          <section className="">
            <label className="text-bluewhale font-medium"> Send Amount</label>
            <div className="flex flex-row gap-3">
              <Select
                options={countrySendAmountOptions}
                defaultValue={countrySendAmountOptions[0]}
                isSearchable={false}
                formatOptionLabel={({ label, image }) => (
                  <div className="flex flex-row items-center gap-2">
                    <img src={image} alt={label} className="h-6 w-6" />
                    <span>{label}</span>
                  </div>
                )}
                styles={selectorStyles}
              />
              <input
                name="sendAmount"
                value={transaction.sendAmount}
                onChange={handleChange}
                placeholder="Enter amount"
                className="flex-1 p-2 text-bluewhale border-1 border-gray-300 outline-blue-500 rounded-md"
              />
            </div>
          </section>

          <section>
            <label className="text-bluewhale font-medium"> Recipient Gets</label>
            <div className="flex flex-row gap-3">
              <Select
                options={countryRecipientOptions}
                defaultValue={countryRecipientOptions[0]}
                isSearchable={false}
                formatOptionLabel={({ label, image }) => (
                  <div className="flex flex-row items-center gap-2">
                    <img src={image} alt={label} className="h-6 w-6" />
                    <span>{label}</span>
                  </div>
                )}
                styles={selectorStyles}
              />
              <input
                value={gbpToPhpConversions(Number(transaction.sendAmount))}
                placeholder="Enter amount"
                className="flex-1 p-2 text-bluewhale border-1 border-gray-300 outline-blue-500 rounded-md"
                required
              />
            </div>
          </section>

          <section>
            <div className="flex flex-row justify-between mb-2">
              <p className="text-gray-500">Exchange Rate</p>
              <span className="text-bluewhale font-bold">{gbp}1.00={php}81.08</span>
            </div>

            <div className="flex flex-row justify-between p-3 bg-blue-200 rounded-lg">
              <span className="text-gray-500">Promo Code</span>
              <div className="flex flex-row items-center gap-2">
                <span className="flex items-center px-2 bg-blue-500 text-white text-sm font-semibold rounded-sm">
                  BC1STDISC
                </span>
                <span className="flex items-center justify-center h-5 w-5 pb-1 border-1 border-red-500 text-red-500 font-medium rounded-full cursor-pointer">
                  x
                </span>
              </div>
            </div>
          </section>

          {/* TODO: Make the payment methods render after typing an amount*/}
          <section>
            <p className="font-semibold mb-2">Choose Preferred Payment</p>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="pay-by-bank"
                className="flex-1 flex flex-row justify-between p-5 ring-1 ring-gray-300 rounded-sm shadow-sm cursor-pointer
                           transition duration-200
                           focus-within:bg-blue-100 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <section className="flex flex-row items-center gap-2">
                  <div className="p-3 bg-blue-200 text-blue-800 rounded-full">
                    <AccountBalanceOutlinedIcon />
                  </div>

                  <div className="flex flex-col">
                    <span className="px-3 text-blue-500 text-sm font-semibold bg-blue-200 rounded-xl">Recommended</span>
                    <span className="text-bluewhale font-semibold">Pay By Bank</span>
                    <span>
                      Fee - <span className="text-bluewhale font-semibold">0.00</span>
                    </span>
                  </div>
                </section>
                <input
                  type="radio"
                  id="pay-by-bank"
                  name="paymentMethod"
                  checked={transaction.paymentMethod === "pay-by-bank"}
                  value="Pay by Bank"
                  onChange={handleChange}
                  className="scale-180"
                />
              </label>
              <label
                htmlFor="online-bank-transfer"
                className="flex-1 flex flex-row justify-between p-5 ring-1 ring-gray-300 rounded-sm shadow-sm cursor-pointer
                           transition duration-200
                           focus-within:bg-blue-100 focus-within:ring-1 focus-within:ring-blue-500"
              >
                <section className="flex flex-row items-center gap-2">
                  <div className="p-3 bg-blue-200 text-blue-800 rounded-full">
                    <AccountBalanceOutlinedIcon />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-bluewhale font-semibold">
                      Online Bank Transfer
                    </span>
                    <span>
                      Fee - <span className="text-bluewhale font-semibold">2.99</span>
                    </span>
                  </div>
                </section>
                <input
                  type="radio"
                  id="online-bank-transfer"
                  name="paymentMethod"
                  checked={transaction.paymentMethod === "online-bank-transfer"}
                  value="Online Bank Transfer"
                  onChange={handleChange}
                  className="scale-180"
                />
              </label>
                
              <label
                htmlFor="card-payments"
                className="flex-1 flex flex-row justify-between p-5 ring-1 ring-gray-300 border-gray-500 rounded-sm shadow-sm cursor-pointer
                           transition duration-200
                           focus-within:bg-blue-100 focus-within:ring-1 focus-within:ring-blue-500"
              >

                <section className="flex flex-row items-center gap-2">
                  <div className="p-3 bg-blue-200 text-blue-800 rounded-full">
                    <CreditCardOutlinedIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-bluewhale font-semibold">
                      Card Payments
                    </span>

                    <span>
                      Fee - <span className="text-bluewhale font-semibold">0.00</span>
                    </span>
                  </div>
                </section>
                
                <input
                  type="radio"
                  id="card-payments"
                  name="paymentMethod"
                  value="Card Payments"
                  checked={transaction.paymentMethod === "card-payments"}
                  onChange={handleChange}
                  className="scale-180"
                />
              </label>
              
            </div>
          </section>
          <Button
            onClick={handleProceed}
            className="block p-3 mt-5 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer hover:bg-gray-400"
          >
            Proceed
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Step1;