import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

const PreviousUseComponent = () => {
  const [count, setCount] = useState(0);
  const { previousStateValue, prevCountRef } = usePrevious(count);
  console.log("This is prev ref", prevCountRef);

  return (
    <>
      <h1>
        This is Previous Use Component and the previous Value is :{prevCountRef.current}
      </h1>
      <h2>Current Count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  );
};

export default PreviousUseComponent;
