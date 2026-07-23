import { AdvisorActionSession } from "./action.types";


export const actionMock: AdvisorActionSession = {

  id:
    "session-001",

  project:
    "Apex Core Platform",

  goal:
    "Complete data layer foundation",

  status:
    "started",

  startedAt:
    new Date().toISOString(),

};