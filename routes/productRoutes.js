import express from "express";
import { createProductController } from "../controller/productController.js";
const router = express.Router();

router.post("/", createProductController);

export default router;
