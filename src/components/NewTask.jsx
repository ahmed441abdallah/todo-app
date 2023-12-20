import React, { useRef } from "react";
import { useState } from "react";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProject } from "../context/ProjectContext";

const NewTask = () => {
  const { handleAddTask } = useProject();
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");
  const notify = () => toast("Task Added successfully");

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.Open();
    } else {
      notify();
      handleAddTask(enteredTask);
      setEnteredTask("");
    }
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className=" font-bold mt-4 text-stone-500 mb-4">
          Invalid Input 🔴
        </h2>
        <p className="text-stone-400 mb-4 ">
          Oops... you try to enter empty failed
        </p>
        <p className="text-stone-400 mb-4 ">
          Enter valid value in input to save
        </p>
      </Modal>
      <div className="flex items-center gap-7">
        <input
          type="text"
          onChange={(e) => setEnteredTask(e.target.value)}
          value={enteredTask}
          className=" px-2 py-1 w-64 rounded-sm bg-stone-200 focus:outline-none"
        ></input>
        <button
          className=" text-stone-600 hover:text-stone-950"
          onClick={handleClick}
        >
          ➕ Add Task
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  );
};

export default NewTask;
