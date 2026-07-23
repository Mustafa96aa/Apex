export interface AdvisorState {
  status: string;

  priority: "low" | "medium" | "high";

  focus: string;

  insight: string;

  recommendation: string;

  action: string;

  progress: {
    dashboard: number;
    advisor: number;
    projects: number;
  };
  decision: {
  title: string;

  situation: string;

  action: string;

  reason: string;

  impact: string;


  project?: {
    name: string;
    progress: number;
    priority: string;
    status: string;
  };
}
}