import { advisorState } from "./advisor.data";

export function getAdvisorState() {
  const state = { ...advisorState };

  // Example Decision Engine v1

  const projectsCount = 0;
  const pendingTasks = 0;

  if (projectsCount === 0) {
    state.message =
      "You don't have any projects yet.";

    state.recommendation =
      "Create your first project to start building your workspace.";

    state.action =
      "Create Project";

    state.priority = "high";
  } else if (pendingTasks > 0) {
    state.message =
      `You have ${pendingTasks} pending tasks.`;

    state.recommendation =
      "Complete your most important task first.";

    state.action =
      "Open Tasks";

    state.priority = "high";
  }

  return state;
}