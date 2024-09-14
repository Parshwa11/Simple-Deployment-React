import { useEffect, useRef, useState } from "react";

const usePrevious = (valueOfState) => {
  const [previousStateValue, setPreviousStateValue] = useState(valueOfState);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = valueOfState;
  }, [valueOfState]);

  return { previousStateValue , prevCountRef };
};

export default usePrevious;
