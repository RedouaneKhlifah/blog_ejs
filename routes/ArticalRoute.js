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
  console.log("tets");
  const articals = await fetchArticals();
  res.render("articals", { articals });
});

// get all artical FORM
router.get("/articalForm", async (req, res) => {
  res.render("formArticle");
});

// router.get("/", fetchArticals);

// get one artical
router.get("/:id", fetchArtical);

// @post

// create a new artical
router.post("/", createArtical);

// @patch

// update artical
router.post("/:id", updateArtical);

export default router;
