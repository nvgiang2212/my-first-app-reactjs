import React, { useCallback, useState } from "react";
import NinthApp from "./NinthApp";

const EighthApp = () => {
  const [count, setCount] = useState(1);
  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  return (
    <div>
      <h2>Eighth_App</h2>
      <h3>{count}</h3>
      <NinthApp count={count} onIncrease={handleIncrease} />
    </div>
  );
};

export default EighthApp;
