import joi from "joi";

export const userApiSchema = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
