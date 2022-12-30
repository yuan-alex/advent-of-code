import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const splitInputInTwo = (input: string): string[] => {
  return [input.slice(0, input.length / 2), input.slice(input.length / 2)];
};

const findCommonCharInStrings = (a: string, b: string): string[] => {
  const commonChars = a.split("").filter((char) => b.includes(char));
  return commonChars.length > 0 ? commonChars : [];
};

const alphaVal = (s: string): number => {
  let result = s.toLowerCase().charCodeAt(0) - 97;
  if (s == s.toUpperCase()) {
    result += 26;
  }
  return result + 1;
};

export const part1 = (input: string) =>
  input
    .split("\r\n")
    .map((line) => {
      const [a, b] = splitInputInTwo(line);
      const duplicates = findCommonCharInStrings(a, b);
      if (duplicates) {
        return alphaVal(duplicates[0]);
      } else {
        throw new Error(`No duplicate found for ${a} ${b}`);
      }
    })
    .reduce((a, b) => a + b);

console.log(part1(input));

export const part2 = (input: string) => {
  const data = input.split("\r\n");
  let result = 0;
  for (let i = 0; i < data.length; i += 3) {
    const slice = data.slice(i, i + 3);
    const duplicates = findCommonCharInStrings(slice[0], slice[1]);
    const badge = duplicates.find((char) => slice[2].includes(char));
    result += alphaVal(badge);
  }
  return result;
};

console.log(part2(input));
