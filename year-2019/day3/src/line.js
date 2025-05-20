class Line {
  #x;
  #y;
  #c;
  constructor(x1, y1, x2, y2) {
    const m = this.#slope(x1, y1, x2, y2);
    this.#c = y1 - m * x1;
    this.#x = -1 * m;
    this.#y = 1;
  }

  #slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
  }

  #determinant(otherLine) {
    return this.#x * otherLine.#y - otherLine.#x * this.#y;
  }

  #xDeterminant(otherLine) {
    return this.#c * otherLine.#y - otherLine.#c * this.#y;
  }

  #yDeterminant(otherLine) {
    return this.#x * otherLine.#c - otherLine.#x * this.#c;
  }

  pointOfIntersection(otherLine) {
    const x = this.#xDeterminant(otherLine) / this.#determinant(otherLine);
    const y = this.#yDeterminant(otherLine) / this.#determinant(otherLine);
    return { x, y };
  }

  display() {
    console.log({ x: this.#x, y: this.#y, c: this.#c });
  }
}

const l1 = new Line(-3, 4, 6, -5);

const l2 = new Line(-6, -5, 7, 8);

l1.display();
l2.display();
//{x:0,y:1}
console.log(l1.pointOfIntersection(l2));
