import React, { useState } from "react";

function CurrencyExhange() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const exchangeRate = 82.013; // Example exchange rate (e.g., 1 INR = 0.013 USD)

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const convertCurrency = () => {
    const amountInNumber = parseFloat(amount);
    if (!isNaN(amountInNumber)) {
      setConvertedAmount(amountInNumber * exchangeRate);
    } else {
      setConvertedAmount(0);
    }
  };

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div>
        <label>Amount in INR: </label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={convertCurrency}>Convert to USD</button>
      <h2>Converted Amount in USD: {convertedAmount.toFixed(2)}</h2>
    </div>
  );
}
export function CheckValue() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>You entered: {value}</p>
    </div>
  );
}
export default CurrencyExhange;
