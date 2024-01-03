import React, { useState, useEffect } from "react";

const FourthApp = () => {
  const [countDownInterval, setCountDownInterval] = useState(180);
  const [countDownSetTimeout, setCountDownSetTimeout] = useState(180);

  // setInterval(() => {
  //   setCountDown(countDown - 1);
  //   đây là cách dùng sai vì mỗi lần 1s setCountDown thì sẽ render lại component
  //   => countDown sẽ khởi tạo lại 1 lần => lặp lại nhiều lần => fail
  // }, 1000);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDownInterval((prev) => prev - 1);
      // setCountDown(countDown - 1);
      // đây là cách dùng sai vì đây là trong closure, setCountDown trong này chạy nhiều lần
      // nhưng useEffect này là hook chạy 1 lần => khi console.log(countDown - 1) luôn là 179
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  console.log("countDownInterval", countDownInterval);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCountDownSetTimeout(countDownSetTimeout - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [countDownSetTimeout]);
  console.log("countDownSetTimeout", countDownSetTimeout);

  return (
    <div>
      <h2>Fourth_App</h2>
      <h3>{countDownInterval}</h3>
      <h3>{countDownSetTimeout}</h3>
    </div>
  );
};

export default FourthApp;
