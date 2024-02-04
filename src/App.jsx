import { useState } from "react";
import BackgroundImage from "./assets/backgroundImg.jpg";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import CurrencyCodes from "currency-codes";
import { TfiExchangeVertical } from "react-icons/tfi";
const App = () => {
  const [amount, setAmount] = useState();
  const [to, setTo] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState();
  const CurrencyCodesOptions = CurrencyCodes.codes();

  const currencyInfo = useCurrencyInfo(from, to, amount);
  console.log(currencyInfo);
  const submitHandler = (e) => {
    e.preventDefault();
    setConvertedAmount(currencyInfo.toFixed(2));
  };
  const swap = (e) => {
    e.preventDefault();
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  return (
    <div
      className={`w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={submitHandler}>
            <div className="w-full mb-1">
              <InputBox
                label={"From"}
                amount={amount}
                currencyOptions={CurrencyCodesOptions}
                onCurrencyTypeChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 flex justify-center items-center h-auto"
              >
                <TfiExchangeVertical className="text-xl" />
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label={"To"}
                amount={convertedAmount}
                currencyOptions={CurrencyCodesOptions}
                amountDisabled={true}
                onCurrencyTypeChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
