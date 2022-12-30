import { readFileLines } from "../utils/utils";
import path from "path";

const data = readFileLines(path.resolve(__dirname, "./input.txt"))[0];

const isUnique = (data: string): boolean => {
  const hashmap = {};
  for (let i = 0; i < data.length; i++) {
    const char = data[i];
    if (hashmap[char]) {
      return false;
    } else {
      hashmap[char] = true;
    }
  }
  return true;
};

const part1 = (data: string) => {
  for (let i = 4; i <= data.length; i++) {
    if (isUnique(data.slice(i - 4, i))) {
      return i;
    }
  }
};

console.log(part1(data));

const part2 = (data: string) => {
  for (let i = 14; i <= data.length; i++) {
    if (isUnique(data.slice(i - 14, i))) {
      return i;
    }
  }
};

console.log(part2(data));
