import fs from "fs";
import path from "path";

const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), "utf8");

enum Play {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum RoundResult {
  Draw = 3,
  Player1 = 0,
  Player2 = 6,
}

function getRoundResult(a, b) {
  if (a == b) {
    return RoundResult.Draw;
  }
  switch (a) {
    case Play.Rock: {
      if (b == Play.Scissors) {
        return RoundResult.Player1;
      } else {
        return RoundResult.Player2;
      }
    }
    case Play.Paper: {
      if (b == Play.Rock) {
        return RoundResult.Player1;
      } else {
        return RoundResult.Player2;
      }
    }
    case Play.Scissors: {
      if (b == Play.Paper) {
        return RoundResult.Player1;
      } else {
        return RoundResult.Player2;
      }
    }
  }
}

function convertCharToPlay(char: string): Play {
  switch (char) {
    case "A":
      return Play.Rock;
    case "B":
      return Play.Paper;
    case "C":
      return Play.Scissors;
    case "X":
      return Play.Rock;
    case "Y":
      return Play.Paper;
    case "Z":
      return Play.Scissors;
  }
}

export function part1(input: string) {
  return input
    .split("\r\n")
    .map((line) => {
      const [a, b] = line.split(" ");
      const play1 = convertCharToPlay(a);
      const play2 = convertCharToPlay(b);
      const result = getRoundResult(play1, play2);
      return result + play2;
    })
    .reduce((a, b) => a + b);
}

console.log(part1(data));

function findWinningPlay(a: Play): Play {
  switch (a) {
    case Play.Rock:
      return Play.Paper;
    case Play.Paper:
      return Play.Scissors;
    case Play.Scissors:
      return Play.Rock;
  }
}

function findLosingPlay(a: Play): Play {
  switch (a) {
    case Play.Rock:
      return Play.Scissors;
    case Play.Paper:
      return Play.Rock;
    case Play.Scissors:
      return Play.Paper;
  }
}

export function part2(input: string) {
  return input
    .split("\r\n")
    .map((line) => {
      const [a, b] = line.split(" ");
      const play1 = convertCharToPlay(a);

      let play2: Play;
      if (b == "X") {
        play2 = findLosingPlay(play1);
      } else if (b == "Y") {
        play2 = play1;
      } else if (b == "Z") {
        play2 = findWinningPlay(play1);
      }

      const result = getRoundResult(play1, play2);
      return result + play2;
    })
    .reduce((a, b) => a + b);
}

console.log(part2(data));
