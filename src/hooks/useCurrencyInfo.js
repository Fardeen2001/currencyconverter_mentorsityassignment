import { useEffect, useState } from "react";

const useCurrencyInfo = (From, To, Amount) => {
  console.log(From, To, Amount);
  const [data, setData] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const getCurrencyData = async () => {
      const res = await fetch(
        `https://api.forexrateapi.com/v1/convert?api_key=${API_KEY}&from=${From}&to=${To}&amount=${Amount}`
      );
      const data = await res.json();
      setData(data?.result);
    };
    getCurrencyData();
  }, [From, To, Amount]);
  console.log(data);
  return data;
};
export default useCurrencyInfo;
