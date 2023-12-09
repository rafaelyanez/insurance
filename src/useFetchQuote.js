import { useState, useEffect } from "react";

const cache = {};

export default function useFetchQuote(quoteData) {
  const [quote, setQuote] = useState();
  const [status, setStatus] = useState("unloaded");
  useEffect(() => {
    console.log(quoteData);
    if (quoteData) {
      const body = JSON.stringify(quoteData);
      if (cache[body]) {
        setQuote(cache[body]);
      } else {
        console.log(JSON.stringify(body));
        //requestQuote(body);
        testLoading(body);
      }
    }
    async function requestQuote(body) {
      setStatus("loading");
      const rest = await fetch(`http://localhost:8080/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });
      const json = await rest.json();
      cache[body] = json.quote || {};
      setQuote(cache[body]);
      setStatus("loaded");
    }

    function testLoading(body) {
      console.log(JSON.stringify(body));
      const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu diam rutrum, lacinia sem at, tempus ligula. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rutrum dapibus ullamcorper. 
Quisque ac pellentesque erat, vel suscipit dui. Aliquam erat volutpat. Vivamus vel turpis quis augue sagittis ultricies. 
Nunc felis metus, volutpat a est at, ultrices vestibulum metus. Phasellus id augue eu ligula imperdiet tempus. Sed volutpat volutpat eros, luctus maximus felis facilisis quis. 
Sed ut ligula est. Cras venenatis tristique est, at convallis lacus suscipit sed. Donec pulvinar laoreet aliquet. Curabitur lacinia tempus feugiat. Ut sagittis diam non nunc suscipit tincidunt. 
Mauris imperdiet arcu at odio cursus dictum. 
  `;
      setStatus("loading");
      setTimeout(() => {
        setQuote(text);
        setStatus("loaded");
      }, 4000);
    }
  }, [quoteData]);

  return [quote, status];
}
