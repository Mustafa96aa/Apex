import type {
  BrainContext,
  BrainDecision,
} from "./brain.types";

export function evaluateBrain(
  context: BrainContext,
): BrainDecision {

  if (context.projectsCount === 0) {
    return {
      priority: "high",

      message:
        "You don't have any projects yet.",

      recommendation:
        "Create your first project to begin building your workspace.",

      action:
        "Create Project",
    };
  }

  if (context.overdueTasks > 0) {
    return {
      priority: "high",

      message:
        `You have ${context.overdueTasks} overdue tasks.`,

      recommendation:
        "Finish the most important overdue task first.",

      action:
        "Open Tasks",
    };
  }

  return {
    priority: "low",

    message:
      "Everything looks good.",

    recommendation:
      "Continue your current work.",

    action:
      "Open Dashboard",
  };
}