import { useState } from "react";
import { useEffect } from "react";

function UseCurrency(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [currency]);

  console.log(data);
  return data;
}

export default UseCurrency;
