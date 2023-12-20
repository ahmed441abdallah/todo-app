import { createContext, useContext, useState } from "react";
export const ProjectContext = createContext();
function ProjectProvider({ children }) {
  const [projectsSate, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const selectedProject = projectsSate.projects.find(
    (el) => el.id === projectsSate.selectedProjectId
  ); // pass to details component

  function handleStart() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  function handleCancel() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }
  function handleSelectedProject(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }
  function handleDelete(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter((el) => el.id !== id),
      };
    });
  }
  function handleAddTask(projectData) {
    const newTask = {
      text: projectData,
      id: Math.random(),
      projectId: projectsSate.selectedProjectId,
    };
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((el) => el.id !== id),
      };
    });
  }
  return (
    <ProjectContext.Provider
      value={{
        projectsSate,
        handleStart,
        handleCancel,
        handleDeleteTask,
        handleAddTask,
        handleSelectedProject,
        handleDelete,
        handleAddProject,
        selectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined)
    throw new Error("you try to get data outside provider ");
  return context;
}
export { useProject, ProjectProvider };
