import express from "express";
import { userApiSchema } from "../apiSchema/userSchema.js";
import {
  signinController,
  singupController,
} from "../controller/userController.js";
import { joiSchemaValidatior } from "../middleware/joiSchemaValidation.js";
const route = express.Router();

route.post("/signup", joiSchemaValidatior(userApiSchema), singupController);
route.post("/signin", joiSchemaValidatior(userApiSchema), signinController);

export default route;
