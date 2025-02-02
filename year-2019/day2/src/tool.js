import { input } from "../data/input.js";

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const intCode = () => input.split(",").map(Number);

export { add, intCode, multiply };
