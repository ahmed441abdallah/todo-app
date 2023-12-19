import React from "react";

const ProjectSidePar = ({
  handleStart,
  projectsSate,
  handleSelectedProject,
  selectedProjectId,
}) => {
  return (
    <aside className=" w-1/3 bg-stone-900 px-8 py-16 rounded-r-xl text-stone-50 md:w-72">
      <h2 className=" font-bold uppercase mb-5 md:text-xl text-stone-200">
        Your Projects 🚀
      </h2>
      <div>
        <button
          onClick={handleStart}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-200"
        >
          + Add Project
        </button>
      </div>
      <ul className="mt-8">
        {projectsSate.projects.map((el) => (
          <li key={el.id}>
            <button
              className={
                el.id === selectedProjectId
                  ? "w-full px-2 py-2 m-2 text-left text-stone-200 rounded-sm bg-stone-800 hover:text-slate-200 hover:bg-stone-800"
                  : "w-full px-2 py-2 m-2 text-left text-stone-400 rounded-sm bg-stone-600 hover:text-slate-400 hover:bg-stone-800"
              }
              onClick={() => handleSelectedProject(el.id)}
            >
              {el.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSidePar;
