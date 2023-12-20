import React from "react";
import img1 from "../assets/no-projects.png";
import Button from "./Button";
import { useProject } from "../context/ProjectContext";
const NoProjects = () => {
  const { handleStart } = useProject();
  return (
    <div className="w-2/3 text-center mt-10">
      <img src={img1} alt="no-project" className=" mx-auto w-16 h-16"></img>
      <h2 className=" font-bold mt-4 text-stone-500 mb-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 ">
        select a project or start with a new one
      </p>
      <Button onClick={handleStart}>Create new project</Button>
    </div>
  );
};

export default NoProjects;
