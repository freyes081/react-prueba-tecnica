import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_RANDOM_IMAGE =
//   "https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`";

export function App() {
  const [fact, setFacts] = useState();
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => setFacts(data.fact));
  }, []);
  return (
    <main>
      <h1>App de Gatitos </h1>
      {fact && <p>{fact}</p>}
    </main>
  );
}
