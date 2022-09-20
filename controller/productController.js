import constaint from "../constaint/index.js";
import {
  deleteProductService,
  fetchAllProducttService,
  fetchProductByIdService,
  insertProductService,
  updateProductService,
} from "../service/productService.js";

export const createProductController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await insertProductService(req.body);
    response.status = constaint.STATUS_CODES.CREATED;
    response.message = constaint.PRODUCT_RESPONSE.PRODUCT_CREATED;
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
    response.status = constaint.STATUS_CODES.OK;
    response.message = constaint.PRODUCT_RESPONSE.PRODUCT_FETCHED;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};

export const fetchProductByIdController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await fetchProductByIdService(req.params);
    response.status = constaint.STATUS_CODES.OK;
    response.message = constaint.PRODUCT_RESPONSE.PRODUCT_FETCHED;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};

export const updateProductController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await updateProductService(req);
    response.status = constaint.STATUS_CODES.OK;
    response.message = constaint.PRODUCT_RESPONSE.PRODUCT_UPDATED;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};

export const deleteProductController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await deleteProductService(req.params);
    response.status = constaint.STATUS_CODES.OK;
    response.message = constaint.PRODUCT_RESPONSE.PRODUCT_DELETED;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};
