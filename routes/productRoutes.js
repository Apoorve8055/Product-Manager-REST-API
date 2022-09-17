import express from "express";
import { createProductSchema } from "../apiSchema/productSchema.js";
import { createProductController } from "../controller/productController.js";
import joiSchemaValidatior from "../middleware/joiSchemaValidation.js";
const router = express.Router();

router.post(
  "/",
  joiSchemaValidatior(createProductSchema),
  createProductController
);

export default router;
