import React, { useState, useRef, useEffect } from "react";

const SeventhApp = () => {
  const timerId = useRef();
  const prevCount = useRef();
  const h3Ref = useRef();
  const [count, setCount] = useState(60);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h3Ref.current);
    const rect = h3Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  console.log(count, prevCount.current);
  return (
    <div>
      <h2>Seventh_App</h2>
      <h3 ref={h3Ref}>{count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default SeventhApp;
