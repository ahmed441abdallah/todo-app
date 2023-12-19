import React from "react";
import Tasks from "./Tasks";
const ProjectDetails = ({
  project,
  handleDelete,
  handleAddTask,
  tasks,
  handleDeleteTask,
  selectedProjectId,
}) => {
  const formatDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className=" w-[35rem] mt-16">
      <header className=" pb-4 mb-4">
        <div className=" flex items-center justify-between">
          <h1 className=" text-3xl font-bold text-stone-600  ">
            📍 {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950 "
            onClick={() => handleDelete(project.id)}
          >
            🗑️ Delete
          </button>
        </div>
        <p className=" mb-4 text-stone-300 mt-3">📅{formatDate}</p>
        <p className=" text-stone-600 whitespace-pre-wrap mb-2">
          📝 {project.description}
        </p>
        <hr></hr>
      </header>
      <Tasks
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
        selectedProjectId={selectedProjectId}
      ></Tasks>
    </div>
  );
};

export default ProjectDetails;
