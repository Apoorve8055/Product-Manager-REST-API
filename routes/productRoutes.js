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
import tokenValidation from "../middleware/tokenValidation.js";
const router = express.Router();

// fetch All Product
router.get(
  "/",
  tokenValidation,
  joiParamsValidatior(fetchProductSchema),
  fetchAllProductController
);

// fetch Product By Id
router.get("/:id", tokenValidation, fetchProductByIdController);

// create Product
router.post(
  "/",
  tokenValidation,
  joiSchemaValidatior(createProductSchema),
  createProductController
);

// update Product
router.put(
  "/:id",
  tokenValidation,
  joiSchemaValidatior(updateProductSchema),
  updateProductController
);

// Delete Product
router.delete("/:id", tokenValidation, deleteProductController);

export default router;
