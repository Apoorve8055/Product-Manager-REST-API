import express from "express";
import {
  createProductSchema,
  fetchProductSchema,
  updateProductSchema,
} from "../apiSchema/productSchema.js";
import {
  createProductController,
  deleteProductController,
  fetchAllProductController,
  fetchProductByIdController,
  updateProductController,
} from "../controller/productController.js";
import {
  joiParamsValidatior,
  joiSchemaValidatior,
} from "../middleware/joiSchemaValidation.js";
const router = express.Router();

// fetch All Product
router.get(
  "/",
  joiParamsValidatior(fetchProductSchema),
  fetchAllProductController
);

// fetch Product By Id
router.get("/:id", fetchProductByIdController);

// create Product
router.post(
  "/",
  joiSchemaValidatior(createProductSchema),
  createProductController
);

// update Product
router.put(
  "/:id",
  joiSchemaValidatior(updateProductSchema),
  updateProductController
);

// Delete Product
router.delete("/:id", deleteProductController);

export default router;
