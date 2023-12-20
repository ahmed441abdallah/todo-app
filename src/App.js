import React from "react";
import NewProject from "./components/NewProject";
import ProjectSidePar from "./components/ProjectSidePar";
import NoProjects from "./components/NoProjects";
import ProjectDetails from "./components/ProjectDeatials";
import { ProjectProvider, useProject } from "./context/ProjectContext";

function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

function AppContent() {
  const { projectsSate } = useProject();
  let content = <ProjectDetails></ProjectDetails>;
  if (projectsSate.selectedProjectId === null) {
    content = <NewProject></NewProject>;
  } else if (projectsSate.selectedProjectId === undefined) {
    content = <NoProjects></NoProjects>;
  }

  return (
    <main className="h-screen py-8 flex gap-8 ">
      <ProjectSidePar></ProjectSidePar>
      {content}
    </main>
  );
}

export default App;
