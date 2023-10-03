import { Router } from "express";

import {
  fetchCategorys,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/categoryController.js";

const router = Router();

router.get("/", fetchCategorys);

export default router;
