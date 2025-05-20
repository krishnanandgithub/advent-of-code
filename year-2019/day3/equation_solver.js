const max = (a, b) => Math.max(a, b);
const multiply = (value) => (num) => value * num;
const divide = (value) => (num) => num / value;

const hcf = (a, b) => {
  if (b === 0) {
    return a;
  }

  return hcf(b, a % b);
};

const decimalPlaces = (num) => {
  const [_, fraction] = num.toString().split(".");
  return fraction?.length || 0;
};

const placeValueMultiplier = (...args) =>
  10 ** args.map(decimalPlaces).reduce(max, -Infinity);

const simplify = (...args) => { // a generic function to simplify group of numbers (integers or fraction)
  const scalingFactor = placeValueMultiplier(...args); // to handle fractions
  const integers = args.map(multiply(scalingFactor)); // conversion from fraction to integer (if any)
  const gcd = integers.reduce(hcf); // finding gcd of multiple numbers
  const simplifiedNumbers = integers.map(divide(gcd)); // simplifying all numbers(integers) by dividing with the gcd
  return simplifiedNumbers;
};

const simplifyEquation = ({ x, y, c }) => {
  const [xCoefficient, yCoefficient, constant] = simplify(x, y, c);
  return { x: xCoefficient, y: yCoefficient, c: constant };
};

const slope = (p1, p2) => (p2.y - p1.y) / (p2.x - p1.x);

const slopForm = (p, m) => {
  const { x, y } = p;
  const c = y - m * x;
  const equation = { x: -m, y: 1, c: c };

  return equation;
};

const towPointForm = (p1, p2) => {
  const m = slope(p1, p2);
  return slopForm(p1, m);
};

const pointOfIntersection = (l1, l2) => {
  const d = l1.x * l2.y - l2.x * l1.y;
  const dx = l1.c * l2.y - l2.c * l1.y;
  const dy = l1.x * l2.c - l2.x * l1.c;

  const x = dx / d;
  const y = dy / d;
  return { x, y };
};

const l1p1 = { x: -3, y: 4 };
const l1p2 = { x: 6, y: -5 };
const l2p1 = { x: -6, y: -5 };
const l2p2 = { x: 7, y: 8 };

// console.log(simplifyEquation(towPointForm({ x: 3, y: 4 }, { x: 5, y: 1 })));
const l1 = towPointForm(l1p1, l1p2);
const l2 = towPointForm(l2p1, l2p2);
console.log(l1, l2);
console.log(pointOfIntersection(l1, l2));
