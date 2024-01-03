import React, { memo } from "react";

const NinthApp = ({count, onIncrease}) => {
  console.log("re-render Ninth_App");
  return (
    <div>
      <h2>Ninth_App</h2>
      <h3>Hello there!</h3>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  );
};

export default memo(NinthApp);
