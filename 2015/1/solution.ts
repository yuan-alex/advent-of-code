import fs from "fs";
import path from "path";

const data = fs.readFileSync(path.resolve("./input.txt"), "utf8").split("");

let counter = 0;
data.forEach((i) => {
    if (i == "(") {
        counter++;
    } else {
        counter--;
    }
})

console.log(counter);
