import { advisorMock } from "./advisor.mock";
import { runAdvisorEngine } from "./advisor.engine";


export function useAdvisor() {

  const decision =
    runAdvisorEngine();


  return {
    ...advisorMock,

    decision:{
      ...advisorMock.decision,

      action:
        decision.decision,

      reason:
        decision.reason,

      impact:
        decision.priority,
      project:
    decision.project,
    }
  };
}