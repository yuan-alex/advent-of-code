import fs from "fs";
import path from "path";

export const readFile = (path: String) => {
  return fs.readFileSync(path, "utf8");
};

export const readFileLines = (path: String) => {
  return readFile(path).split("\r\n");
};
