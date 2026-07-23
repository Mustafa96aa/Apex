import { getBrainContext } from "./brain.context";
import { evaluateBrain } from "./brain.rules";

export function runBrain() {

  const context = getBrainContext();

  return evaluateBrain(context);

}