import product from "../database/model/product.js";

export const insertProductService = async (serviceData) => {
  try {
    const productModel = new product({ ...serviceData });
    const result = await productModel.save();
    return result.toObject();
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};
