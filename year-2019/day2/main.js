import { computer } from "./src/p1_1202_program_alarm.js";
import { extendedComputer } from "./src/p2_1202_program_alarm.js";
import { intCode } from "./src/tool.js";

const main = () => {
  console.log("part 1:", computer(intCode(), 12, 2));
  console.log("part 2:", extendedComputer(intCode()));
};

main();
