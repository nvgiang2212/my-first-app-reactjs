import React, { useReducer, useRef } from "react";

// 1. InitState
const initState = {
  job: "",
  jobs: [],
};

// 2. Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3. Reducer
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev state: ", state);
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = { ...state, job: action.payload };
      break;
    case ADD_JOB:
      newState = { ...state, jobs: [...state.jobs, action.payload] };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = { ...state, jobs: newJobs };
      break;
    default:
      throw new Error("Invalid action");
  }
  console.log("New state: ", newState);
  return newState;
};

const TwelveApp = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Twelve_App</h2>
      <input
        type="text"
        placeholder="Enter todo..."
        ref={inputRef}
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item, index) => {
          return (
            <li key={index}>
              {item} - <span onClick={() => dispatch(deleteJob(index))}>X</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TwelveApp;
