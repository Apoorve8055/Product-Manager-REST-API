import constaint from "../constaint/index.js";
import {
  fetchAllProducttService,
  insertProductService,
} from "../service/productService.js";

export const createProductController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await insertProductService(req.body);
    response.status = constaint.PRODUCT_RESONSE.PRODUCT_CREATED.status;
    response.message = constaint.PRODUCT_RESONSE.PRODUCT_CREATED.message;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};

export const fetchAllProductController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await fetchAllProducttService(req.query);
    response.status = constaint.PRODUCT_RESONSE.PRODUCT_FETCHED.status;
    response.message = constaint.PRODUCT_RESONSE.PRODUCT_FETCHED.message;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};
