import { advisorContext } from "./context/advisor.context";
import { getAdvisorMemory } from "./memory/advisor.memory.engine";
import { analyzeProjects } from "@/lib/projects/project.analyzer";


export function runAdvisorEngine() {

  const memory = getAdvisorMemory();

  const projects = analyzeProjects();


  const {
    workspace,
    currentFocus,
  } = advisorContext;



  /*
    Project Intelligence Layer

    Apex checks:
    - active projects
    - high priority projects
  */

  if (projects.critical.length > 0) {

    const project =
      projects.critical[0];


    return {

  decision:
    `Focus on ${project.name}`,

  reason:
    `This project has high priority and requires attention.`,

  priority:
    "High",

  project: {
    name:
      project.name,

    progress:
      project.progress,

    priority:
      project.priority,

    status:
      project.status,
  },

};

  }



  /*
    Task Awareness Layer
  */

  if (
    workspace.pendingTasks > 0
  ) {

    return {

      decision:
        "Complete current tasks before creating new modules.",

      reason:
        `You have ${workspace.pendingTasks} pending tasks. 
Apex recommends improving execution before expansion.`,

      priority:
        "High",

    };

  }



  /*
    Growth Mode
  */

  return {

    decision:
      "Continue expanding Apex.",

    reason:
      "Your workspace is stable and ready for the next growth phase.",

    priority:
      "Medium",

  };

}