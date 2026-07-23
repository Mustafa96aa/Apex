export type AdvisorDecision = {

  decision: string;

  reason: string;

  priority: string;


  project?: {

    name: string;

    progress: number;

    priority: string;

    status: string;

  };

};