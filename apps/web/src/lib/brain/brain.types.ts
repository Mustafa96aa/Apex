export type BrainPriority =
  | "low"
  | "medium"
  | "high";

export interface BrainContext {
  projectsCount: number;
  pendingTasks: number;
  completedTasks: number;
  overdueTasks: number;
}

export interface BrainDecision {
  priority: BrainPriority;

  message: string;

  recommendation: string;

  action: string;
}