import React from "react";
import Tasks from "./Tasks";
import { useProject } from "../context/ProjectContext";
const ProjectDetails = () => {
  const { selectedProject, handleDelete } = useProject();
  const formatDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className=" w-[35rem] mt-16">
      <header className=" pb-4 mb-4">
        <div className=" flex items-center justify-between">
          <h1 className=" text-3xl font-bold text-stone-600  ">
            📍 {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950 "
            onClick={() => handleDelete(selectedProject.id)}
          >
            🗑️ Delete
          </button>
        </div>
        <p className=" mb-4 text-stone-300 mt-3">📅{formatDate}</p>
        <p className=" text-stone-600 whitespace-pre-wrap mb-2">
          📝 {selectedProject.description}
        </p>
        <hr></hr>
      </header>
      <Tasks></Tasks>
    </div>
  );
};

export default ProjectDetails;
