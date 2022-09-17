import express from "express";
import {
  createProductSchema,
  fetchProductSchema,
} from "../apiSchema/productSchema.js";
import {
  createProductController,
  fetchAllProductController,
} from "../controller/productController.js";
import {
  joiParamsValidatior,
  joiSchemaValidatior,
} from "../middleware/joiSchemaValidation.js";
const router = express.Router();

router.post(
  "/",
  joiSchemaValidatior(createProductSchema),
  createProductController
);

router.get(
  "/",
  joiParamsValidatior(fetchProductSchema),
  fetchAllProductController
);

export default router;
