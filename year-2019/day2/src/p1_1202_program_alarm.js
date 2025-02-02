import { add, multiply } from "./tool.js";

const getParameters = (code, pointer) => {
  const operand1 = code[code[pointer + 1]];
  const operand2 = code[code[pointer + 2]];
  const address = code[pointer + 3];
  return [operand1, operand2, address];
};

const performOperation = (code, pointer, operation) => {
  const [operand1, operand2, address] = getParameters(code, pointer);
  code[address] = operation(operand1, operand2);
  return pointer + 4;
};

const computer = ([...intCode], firstElement, secondElement) => {
  let pointer = 0;
  const code = intCode;
  code[1] = firstElement;
  code[2] = secondElement;
  let opcode = code[pointer];
  while (opcode !== 99) {
    if (opcode === 1) {
      pointer = performOperation(code, pointer, add);
    }
    if (opcode === 2) {
      pointer = performOperation(code, pointer, multiply);
    }
    opcode = code[pointer];
  }
  return code[0];
};

export { computer };
