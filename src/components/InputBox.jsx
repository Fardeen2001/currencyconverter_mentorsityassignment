import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyTypeChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={label} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          name={label}
          id={label}
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Please Enter Amount...."
          disabled={amountDisabled}
          value={amount || ""}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 w-full mb-2">Currency Type</p>
        <select
          value={selectedCurrency}
          className="bg-gray-100 rounded-lg p-1 cursor-pointer outline-none"
          onChange={(e) =>
            onCurrencyTypeChange && onCurrencyTypeChange(e.target.value)
          }
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
