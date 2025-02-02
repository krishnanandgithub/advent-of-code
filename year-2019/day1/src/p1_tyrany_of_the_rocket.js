import { input } from "../data/input.js";

const masses = () => input.split("\n").map((e) => +e);
const add = (a, b) => a + b;
const fuels = (masses) => masses.map((m) => Math.floor(m / 3) - 2);
const totalFuel = () => fuels(masses()).reduce(add, 0);

export { add, fuels, masses, totalFuel };
