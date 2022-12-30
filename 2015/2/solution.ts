import fs from "fs";
import path from "path";

const data = path.resolve("./input.txt", "utf8");

export function part1(input: string) {
  return input
    .split(/\r?\n/)
    .map((line) => {
      const [x, y, z] = line.split("x").map(Number);
      const surfaceArea = 2 * (x * y + x * z + y * z);
      const smallestSide = Math.min(x * y, x * z, y * z);
      return surfaceArea + smallestSide;
    })
    .reduce((a, b) => a + b, 0);
}

console.log(part1(data));
