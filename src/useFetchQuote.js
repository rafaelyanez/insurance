import { useState, useEffect } from "react";

const cache = {};

export default function useFetchQuote(quoteData) {
  const [quote, setQuote] = useState();
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    if (quoteData) {
      const body = JSON.stringify(quoteData);
      if (cache[body]) {
        setQuote(cache[body]);
      } else {
        console.log(JSON.stringify(body));
        requestQuote(body);
      }
    }
    async function requestQuote(body) {
      setStatus("loading");
      try {
        const rest = await fetch(
          `https://backend-dot-insurance-407608.uk.r.appspot.com/quote`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: body,
          }
        );
        const quote = await rest.json();
        console.log(`response ==> ${JSON.stringify(quote)}`);
        cache[body] = quote || {};
        setQuote(cache[body]);
        setStatus("loaded");
      } catch (error) {
        setStatus("unloaded");
        console.error(error);
      }
    }
  }, [quoteData]);

  return [quote, status];
}
