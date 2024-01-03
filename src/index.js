import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Fake comments
function emitComment(id) {
  setInterval(() => {
    // như scroll, resize thì window sẽ tự emit event,
    // nhưng ở đây ta sẽ tự tạo và phát ra 1 event ở tầng window
    // => bất cứ file nào trong ứng dụng thì đều listen được
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `This is comment of lesson ${id}`,
      })
    );
  }, 1000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
