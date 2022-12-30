import fs from "fs";
import path from "path";

const input = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const part1 = (input: string) =>
  input.split("\r\n").filter((line) => {
    const [elf1Lo, elf1Hi, elf2Lo, elf2Hi] = line.split(/-|,/).map(Number);
    return (
      (elf1Lo <= elf2Lo && elf2Hi <= elf1Hi) ||
      (elf2Lo <= elf1Lo && elf1Hi <= elf2Hi)
    );
  }).length;

console.log(part1(input));

const part2 = (input: string) =>
  input.split("\r\n").filter((line) => {
    const [elf1Lo, elf1Hi, elf2Lo, elf2Hi] = line.split(/-|,/).map(Number);
    return elf1Lo <= elf2Hi && elf2Lo <= elf1Hi;
  }).length;

console.log(part2(input));
