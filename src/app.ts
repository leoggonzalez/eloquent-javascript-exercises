import express from "express";
import { chapter2Controller } from "./controllers/chapter_2_controller";
import { chapter3Controller } from "./controllers/chapter_3_controller";
import path from "path";

const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "./src/views");

app.get("/", (_, res) => {
  res.render("index", { title: "Hey", message: "Hello there" });
});

app.get("/chapter-2", chapter2Controller);
app.get("/chapter-3", chapter3Controller);

app.listen(3000, () => {
  console.log("Application is listening on port 3000!");
});
