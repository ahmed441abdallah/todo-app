import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidePar from "./components/ProjectSidePar";
import NoProjects from "./components/NoProjects";
import ProjectDetails from "./components/ProjectDeatials";
function App() {
  const [projectsSate, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
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
  const selectedProject = projectsSate.projects.find(
    (el) => el.id === projectsSate.selectedProjectId
  ); // pass to details component
  let content = (
    <ProjectDetails
      project={selectedProject}
      handleDelete={handleDelete}
      handleAddTask={handleAddTask}
      handleDeleteTask={handleDeleteTask}
      tasks={projectsSate.tasks}
      selectedProjectId={projectsSate.selectedProjectId}
    ></ProjectDetails>
  );
  if (projectsSate.selectedProjectId === null) {
    content = (
      <NewProject
        handleCancel={handleCancel}
        handleAddProject={handleAddProject}
      ></NewProject>
    );
  } else if (projectsSate.selectedProjectId === undefined) {
    content = <NoProjects handleStart={handleStart}></NoProjects>;
  }
  return (
    <main className="h-screen py-8 flex gap-8 ">
      <ProjectSidePar
        projectsSate={projectsSate}
        handleStart={handleStart}
        handleSelectedProject={handleSelectedProject}
        selectedProjectId={projectsSate.selectedProjectId}
      ></ProjectSidePar>
      {content}
    </main>
  );
}

export default App;
