import { Router } from "express";

import {
  fetchArticals,
  fetchArtical,
  createArtical,
  updateArtical,
  deleteArtical,
} from "../Controllers/ArticalController.js";

const router = Router();

// @get

// get all articals
router.get("/", async (req, res) => {
  const articals = await fetchArticals();
  res.render("articals", { articals });
});

// router.get("/", fetchArticals);

router.get("/yes", (req, res) => {
  res.render("index", { text: "hello" });
});
// get one artical
router.get("/:id", fetchArtical);

// @post

// create a new artical
router.post("/", createArtical);

// @patch

// update artical
router.post("/:id", updateArtical);

export default router;
