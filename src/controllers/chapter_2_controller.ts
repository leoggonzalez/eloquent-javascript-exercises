import { Request, Response } from "express";

export const chapter2Controller = (_: Request<any>, res: Response<any>) => {
  // First exercise
  let triangle = "<pre>";

  for (let i = 0; i <= 7; i++) {
    triangle += `${new Array(i + 1).join("#")}\n`;
  }

  triangle += "</pre>";

  // Second exercise
  let fizzbuzz = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzbuzz += "FizzBuzz ";
      continue;
    }
    if (i % 3 === 0) {
      fizzbuzz += "Fizz ";
      continue;
    }
    if (i % 5 === 0) {
      fizzbuzz += "Buzz ";
      continue;
    }
    fizzbuzz += `${i} `;
  }

  let chessboard = function (size: number): string {
    let board = "<pre>";

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            board += "#";
          } else {
            board += " ";
          }
        } else {
          if (j % 2 === 0) {
            board += " ";
          } else {
            board += "#";
          }
        }
      }
      board += "\n";
    }
    board += "</pre>";

    return board;
  };

  res.render("chapter-2", { triangle, fizzbuzz, chessboard });
};
