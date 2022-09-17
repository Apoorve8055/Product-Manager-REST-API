const constaint = {
  DEFAULT_SERVER_RESPONSE: {
    status: 400,
    message: "",
    body: {},
  },
  PRODUCT_RESONSE: {
    PRODUCT_CREATED: {
      status: 201,
      message: "Product Created successfully!",
      body: {},
    },
    PRODUCT_FETCHED: {
      status: 200,
      message: "Product fetched successfully!",
    },
  },
  REQUEST_VALIDATION: {
    BAD_REQUEST_MESSAGE: "invalid field",
  },
};

export default constaint;
