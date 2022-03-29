import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/", (_, res) => {
  res.render("index", { title: "Hey", message: "Hello there" });
});

app.get("/chapter-2", (_, res) => {
  let triangle = "";

  for (let i = 0; i <= 7; i++) {
    triangle += `<div>${new Array(i + 1).join("#")}</div>`;
  }

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
    let board = "";

    for (let i = 0; i < size; i++) {
      board += "<div>";
      for (let j = 0; j < size; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            board += "<span>#</span>";
          } else {
            board += "<span> </span>";
          }
        } else {
          if (j % 2 === 0) {
            board += "<span> </span>";
          } else {
            board += "<span>#</span>";
          }
        }
      }
      board += "</div>";
    }

    return board;
  };

  res.render("chapter-2", { triangle, fizzbuzz, chessboard });
});

app.listen(3000, () => {
  console.log("Application is listening on port 3000!");
});
