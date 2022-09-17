import product from "../database/model/product.js";
import { transformMongodbData } from "../helper/mongodbHelper.js";

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
