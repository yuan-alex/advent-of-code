import { readFileLines } from "../utils/utils";
import path from "path";

const lines = readFileLines(path.resolve(__dirname, "./input.txt"));

class CrateStore {
  store: { [key: string]: string[] } = {};

  constructor(lines: string[]) {
    for (const line of lines) {
      if (line[0] != "[") break;
      for (let [i, j] = [0, 1]; i < line.length; [i, j] = [i + 4, j + 1]) {
        const target = line[i + 1];
        if (target != " ") {
          if (this.store[j]) {
            this.store[j].unshift(target);
          } else {
            this.store[j] = [target];
          }
        }
      }
    }
  }

  getTopBoxes = () => {
    return Object.keys(this.store).map(
      (i) => this.store[i][this.store[i].length - 1]
    );
  };

  size = () => {
    return Object.keys(this.store).length;
  };

  move = (quantity: Number, from: string, to: string) => {
    for (let i = 0; i < quantity; i++) {
      const selected = this.store[from].pop();
      this.store[to].push(selected);
    }
  };

  move2 = (quantity: Number, from: string, to: string) => {
    const selected = this.store[from].splice(-quantity);
    this.store[to].push(...selected);
  };
}

const part1 = (lines: string[]) => {
  const store = new CrateStore(lines);
  lines.slice(store.size() + 1).forEach((instruction) => {
    const temp = instruction.split(" ");
    store.move(parseInt(temp[1]), temp[3], temp[5]);
  });
  return store.getTopBoxes().join("");
};

console.log(part1(lines));

const part2 = (lines: string[]) => {
  const store = new CrateStore(lines);
  lines.slice(store.size() + 1).forEach((instruction) => {
    const temp = instruction.split(" ");
    store.move2(parseInt(temp[1]), temp[3], temp[5]);
  });
  return store.getTopBoxes().join("");
};

console.log(part2(lines));
