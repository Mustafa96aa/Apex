import { actionMock } from "./action.mock";


export function startFocusSession() {

  return {

    ...actionMock,

    status:
      "started",

  };

}