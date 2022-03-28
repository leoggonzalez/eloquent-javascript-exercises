import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there" });
});

app.get("/chapter-1", (req, res) => {
  res.render("chapter-1");
});

app.listen(3000, () => {
  console.log("Application is listening on port 3000!");
});
