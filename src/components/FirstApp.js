import React, { useState } from "react";
import SecondApp from "./SecondApp";
import ThirdApp from "./ThirdApp";
import FourthApp from "./FourthApp";
import SixthApp from "./SixthApp";
import SeventhApp from "./SeventhApp";

const FirstApp = () => {
  const [job, setJob] = useState("");
  const [jobList, setJobList] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(storageJobs);
    // toán tử ?? dùng khi giá trị phía trước là NaN, undefined, null sẽ lấy giá trị phía sau
    return storageJobs ?? [];
  });

  const handleAddJob = () => {
    setJobList((prev) => {
      const newJobs = [...prev, job];

      // Save to localStorage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
    console.log(jobList); // chỉ hiển thị list giá trị trước khi click Add btn
  };

  const [show, setShow] = useState(false);
  let [status, setStatus] = useState("show");
  const showSecondApp = () => {
    setShow(!show);
    if (!show) setStatus("hide");
    else setStatus("show");
  };

  return (
    <div>
      <h2>First_App</h2>
      {/* <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleAddJob}>Add</button>
      <ul>
        {jobList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <button onClick={showSecondApp}>{status}</button>
      {/* {show && <SecondApp />} */}
      {/* {show && <ThirdApp />} */}
      {/* {show && <FourthApp />} */}
      {/* {show && <SixthApp />} */}
      {/* {show && <SeventhApp />} */}
    </div>
  );
};

export default FirstApp;
