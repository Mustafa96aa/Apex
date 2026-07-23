import { projectsMock } from "./projects.mock";


export function analyzeProjects() {

  const activeProjects =
    projectsMock.filter(
      project =>
        project.status === "active"
    );


  const highPriority =
    activeProjects.filter(
      project =>
        project.priority === "high"
    );


  return {

    total:
      projectsMock.length,

    active:
      activeProjects.length,

    critical:
      highPriority,

  };

}