import { computer } from "./p1_1202_program_alarm.js";

const extendedComputer = (intCode) => {
  const code = intCode;
  const result = 19690720;
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      if (computer(code, noun, verb) === result) {
        return 100 * noun + verb;
      }
    }
  }
};

export { extendedComputer };
