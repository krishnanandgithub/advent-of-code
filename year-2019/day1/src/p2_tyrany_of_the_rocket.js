import { add, masses } from "./p1_tyrany_of_the_rocket.js";

const allFuels = (mass) => {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) {
    return 0;
  }

  return fuel + allFuels(fuel);
};

const fuelsOfFuels = (masses) => masses.map(allFuels);
const totalFuelsOfFuels = () => fuelsOfFuels(masses()).reduce(add, 0);

export { totalFuelsOfFuels };
