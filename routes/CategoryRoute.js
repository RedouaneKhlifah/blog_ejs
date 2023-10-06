import { Router } from "express";

import {
  fetchCategorys,
  fetchCategorysAPI,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/categoryController.js";

const router = Router();

router.get("/fetchCategorysAPI", fetchCategorysAPI);

export default router;
