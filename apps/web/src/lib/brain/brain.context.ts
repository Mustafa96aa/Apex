import type { BrainContext } from "./brain.types";

export function getBrainContext(): BrainContext {
  return {
    projectsCount: 0,
    pendingTasks: 0,
    completedTasks: 0,
    overdueTasks: 0,
  };
}