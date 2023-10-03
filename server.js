"use strict";
import express from "express";
import dotenv from "dotenv";

// routes //
import ArticalRoute from "./routes/ArticalRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import Artical_CategoryRoute from "./routes/Artical_CategoryRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.port;

app.set("view engine", "ejs");
app.set("views", "./views/pages");

app.use(express.static("./views/assets"));

console.log(express.static("assets"));

app.get("/", (req, res) => {
  res.render("home", { text: "hello" });
});

app.use(express.json());

app.use("/artical", ArticalRoute);

app.listen(port, function () {
  console.log("Server listening on port " + port + "...");
});
