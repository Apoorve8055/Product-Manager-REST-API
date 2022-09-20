import constaint from "../constaint/index.js";
import product from "../database/model/product.js";
import {
  checkObjectId,
  transformMongodbData,
} from "../helper/mongodbHelper.js";

export const insertProductService = async (serviceData) => {
  try {
    const productModel = new product({ ...serviceData });
    const result = await productModel.save();
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};

export const fetchAllProducttService = async ({ skip = 0, limit = 10 }) => {
  try {
    let result = await product
      .find({})
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};

export const fetchProductByIdService = async ({ id }) => {
  try {
    checkObjectId(id);
    let result = await product.findById(id);
    if (!result) throw new Error(constaint.PRODUCT_RESPONSE.PRODUCT_NOT_FOUND);
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};

export const updateProductService = async (req) => {
  const id = req.params.id;
  console.log(req.body);
  try {
    checkObjectId(id);
    let result = await product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!result) throw new Error(constaint.PRODUCT_RESPONSE.PRODUCT_NOT_FOUND);
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};

export const deleteProductService = async ({ id }) => {
  try {
    checkObjectId(id);
    let result = await product.findByIdAndDelete(id);
    if (!result) throw new Error(constaint.PRODUCT_RESPONSE.PRODUCT_NOT_FOUND);
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};
