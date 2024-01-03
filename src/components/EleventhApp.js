import React, { useReducer, useState } from "react";

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// 1. Init state
const initState = 0;

// 2. Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. Reducer
const reducer = (state, action) => {
  console.log("reducer is running...");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid state");
  }
};

const EleventhApp = () => {
  const [count, setCount] = useState(0);

  // useReducer
  const [state, dispatch] = useReducer(reducer, initState);

  // const [state, dispatch] = useReducer(reducer, initialState, init?);
  // Trong đó:
  // - reducer: đây là hàm reducer, nhận vào 2 tham số là state hiện tại và action được gửi đến.
  // 					Đây là thông số bắt buộc. Hàm này có nhiệm vụ xử lý các action và trả về state mới.
  // - initialState: Đây là giá trị ban đầu cho state.
  // 					Đây là thông số tuỳ chọn. Giá trị ban đầu cho state. Nếu ko được chỉ định,
  // 					thì initialState sẽ được sử dụng làm giá trị ban đầu cho state.
  // - init?: Đây là 1 hàm tuỳ chọn có thể được sử dụng để tạo state ban đầu.
  // 					Hàm này sẽ được gọi trong lần render đầu tiên của component. Có thể được sử dụng để
  // 					tạo state ban đầu. Nếu ko được chỉ định, reducer sẽ được sử dụng để tạo state ban đầu.

  // useReducer

  return (
    <div>
      <h2>Eleventh_App</h2>
      <h3>{count} - useState</h3>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <br />
      <h3>{state} - useReducer</h3>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
};

export default EleventhApp;
