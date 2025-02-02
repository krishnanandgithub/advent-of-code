const getParameters = (code, pointer) => {
  const operand1 = code[code[pointer + 1]];
  const operand2 = code[code[pointer + 2]];
  const address = code[pointer + 3];
  return [operand1, operand2, address];
};

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const performOperation = (code, pointer, operation) => {
  const [operand1, operand2, address] = getParameters(code, pointer);
  code[address] = operation(operand1, operand2);
  return pointer + 4;
};

const computer = (intCode) => {
  let pointer = 0;
  const code = intCode;
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
  return code;
};

export { computer };
