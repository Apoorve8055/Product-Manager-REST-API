import joi from "joi";

export const createProductSchema = joi.object().keys({
  name: joi.string().required(),
  price: joi.number().required(),
  brand: joi.string().required(),
});
