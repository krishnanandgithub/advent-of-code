import { input } from "../data/input.js";

const input1 = `R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`;
const input2 = `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`;

const getLines = () => {
  const [line1, line2] = input.split("\n");
  const l1 = line1.split(",");
  const l2 = line2.split(",");
  return [l1, l2];
};

const parseSegment = (segment) => {
  const move = segment.slice(0, 1);
  const steps = parseInt(segment.slice(1));

  return [move, steps];
};

const up = ([...points], steps) => {
  const { x, y } = points.at(-1);
  for (let count = 1; count <= steps; count++) {
    points.push({ x: x, y: y + count });
  }

  return points;
};

const down = ([...points], steps) => {
  const { x, y } = points.at(-1);
  for (let count = 1; count <= steps; count++) {
    points.push({ x: x, y: y - count });
  }

  return points;
};

const left = ([...points], steps) => {
  const { x, y } = points.at(-1);
  for (let count = 1; count <= steps; count++) {
    points.push({ x: x - count, y: y });
  }

  return points;
};

const right = ([...points], steps) => {
  const { x, y } = points.at(-1);
  for (let count = 1; count <= steps; count++) {
    points.push({ x: x + count, y: y });
  }

  return points;
};

const line = ([...points], lineSegment) => {
  const [move, steps] = parseSegment(lineSegment);
  switch (move) {
    case "U":
      return up(points, steps);
    case "D":
      return down(points, steps);
    case "L":
      return left(points, steps);
    case "R":
      return right(points, steps);
  }
};

const manhattanDistance = (p1, p2) => {
  return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
};

const main = () => {
  const [l1, l2] = getLines().map((l) => l.reduce(line, [{ x: 0, y: 0 }]));
  let minDistance = Infinity;
  let minSteps = Infinity;
  for (let i = 1; i < l1.length; i++) {
    for (let j = 1; j < l2.length; j++) {
      const p1 = l1[i];
      const p2 = l2[j];
      if (p1.x === p2.x && p1.y === p2.y) {
        const distance = manhattanDistance(p1, { x: 0, y: 0 });
        if (distance < minDistance) {
          minDistance = distance;
        }
        if (i + j < minSteps) {
          minSteps = i + j;
        }
      }
    }
  }

  return [minDistance, minSteps];
};

console.log(main());
