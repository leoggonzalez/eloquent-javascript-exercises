"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chapter_2_controller_1 = require("./controllers/chapter_2_controller");
const chapter_3_controller_1 = require("./controllers/chapter_3_controller");
const path_1 = __importDefault(require("path"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", "./src/views");
app.get("/", (_, res) => {
    res.render("index", { title: "Eloquen Javascript Exercises" });
});
app.get("/chapter-2", chapter_2_controller_1.chapter2Controller);
app.get("/chapter-3", chapter_3_controller_1.chapter3Controller);
app.listen(PORT, () => {
    console.log(`Application is listening on port ${PORT}!`);
});
