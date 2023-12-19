import React from "react";
import NewTask from "./NewTask";

const Tasks = ({
  handleAddTask,
  tasks,
  handleDeleteTask,
  selectedProjectId,
}) => {
  const projectTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  console.log(projectTasks);

  return (
    <section>
      <h2 className=" text-2xl text-stone-700 font-bold mb-4"> TASKS ⏳</h2>
      <NewTask handleAddTask={handleAddTask}></NewTask>
      {tasks.length >= 1 ? (
        <ul className=" p-4 mt-4 rounded-md bg-stone-100">
          {projectTasks.map((el) => (
            <li key={el.id} className="flex justify-between my-4 border-b py-2">
              <span>{el.text}</span>
              <button
                className=" text-stone-600 hover:text-red-500"
                onClick={() => handleDeleteTask(el.id)}
              >
                ✖️ Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className=" mb-4 my-8  text-stone-700 font-bold text-center">
          This Project does not have any tasks 🥺
        </p>
      )}
    </section>
  );
};

export default Tasks;
