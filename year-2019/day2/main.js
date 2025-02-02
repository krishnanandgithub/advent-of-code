import { computer } from "./src/p1_1202_program_alarm.js";
import { input } from "./data/input.js";

const intCode = () => input.split(",").map(Number);
const main = () => {
  console.log(computer(intCode()));
};

main();
