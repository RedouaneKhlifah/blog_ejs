import { Router } from "express";

import { filter } from "../Controllers/Artical_CategoryController.js";

const router = Router();

router.get("/", filter);
export default router;
