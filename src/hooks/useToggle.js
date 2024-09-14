import React, { useEffect, useState } from "react";

const useToggle = () => {
  const [toggleValue, setToggleValue] = useState("white");

  useEffect(() => {
    console.log("use Toggle is getting called");
  }, []);

  const setMode = (modeColor = "white") => {
    setToggleValue(modeColor);
  };

  return { toggleValue, setMode };
};

export default useToggle;
