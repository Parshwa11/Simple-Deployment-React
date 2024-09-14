import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [expensiveState, setExpensiveState] = useState(0);
  const someExpensiveFunction = useMemo(() => {
    {
      console.log("is Clled");
      let result = 0;
      for (let i = 0; i < 200000000; i++) {
        result += i;
      }
      return result;
    }
  }, [expensiveState]);

  return (
    <>
      {someExpensiveFunction}

      <h4>{count}</h4>

      <button
        onClick={() => {
          setCount(count + 1);
          count % 10 === 0 && setExpensiveState(Math.random());
        }}
      >
        Increase Count Value
      </button>
    </>
  );
}

export default App;
