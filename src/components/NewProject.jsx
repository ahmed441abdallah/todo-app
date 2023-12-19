import React, { useRef } from "react";
import Input from "./Input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./Modal";
const NewProject = ({ handleAddProject, handleCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      dueDate.current.value.trim() === ""
    ) {
      modal.current.Open(); // Use optional chaining to check if modal.current is defined
      return;
    } else {
      const newProject = {
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
      };
      handleAddProject(newProject);
    }
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className=" font-bold mt-4 text-stone-500 mb-4">
          {" "}
          Invalid Input 🔴
        </h2>
        <p className="text-stone-400 mb-4 ">
          Oops... you try to enter empty failed
        </p>
        <p className="text-stone-400 mb-4 ">
          Enter valid value in input to save
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="flex justify-end gap-4 my-4 mx-4 items-center ">
          <li>
            <button
              onClick={handleCancel}
              className=" text-stone-800 hover: text-stone-900"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" rounded-md bg-stone-800 text-stone-50 px-4 py-2 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
            <ToastContainer />
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title}></Input>
          <Input label="Description" textarea={true} ref={description}></Input>
          <Input label="Due Date" type="date" ref={dueDate}></Input>
        </div>
      </div>
    </>
  );
};

export default NewProject;
