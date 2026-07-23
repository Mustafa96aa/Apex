export type AdvisorActionSession = {

  id: string;

  project: string;

  goal: string;

  status:
    | "started"
    | "completed"
    | "paused";

  startedAt: string;

};