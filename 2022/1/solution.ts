import fs from "fs";
import path from "path";

const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf8");

export function part1(input: string) {
    const calories = input.split("\r\n\r\n").map(line => line.split("\r\n").map(Number).reduce((a, b) => a + b));
    return Math.max(...calories);
}

console.log(part1(data));
