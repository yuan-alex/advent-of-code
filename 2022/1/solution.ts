import fs from "fs";
import path from "path";

const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf8");

export function part1(input: string) {
    const calories = input.split("\r\n\r\n").map(line => line.split("\r\n").map(Number).reduce((a, b) => a + b));
    return Math.max(...calories);
}

console.log(part1(data));

export function part2(input: string) {
    const calories = input.split("\r\n\r\n").map(line => line.split("\r\n").map(Number).reduce((a, b) => a + b));
    calories.sort((a, b) => b - a);
    return calories[0] + calories[1] + calories[2];
}

console.log(part2(data));
