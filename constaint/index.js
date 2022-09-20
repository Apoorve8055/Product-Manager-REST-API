const constaint = {
  DEFAULT_SERVER_RESPONSE: {
    status: 400,
    message: "",
    body: {},
  },
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    BAD_REQUEST: 400,
  },
  PRODUCT_RESPONSE: {
    PRODUCT_CREATED: "Product Created successfully!",
    PRODUCT_FETCHED: "Product fetched successfully!",
    PRODUCT_NOT_FOUND: "Product not found",
    PRODUCT_UPDATED: "Product updated successfully!",
    PRODUCT_DELETED: "Product has been deleted!",
  },
  USER_RESPONSE: {
    SIGNUP_SUCCESS: "Signup success",
    DUPLICATE_EMAIL: "User already exist",
    LOGIN_SUCCESS: "login successfully",
    USER_NOT_FOUND: "User not found",
    PASSWORD_INCORRECT: "incorrect password",
  },
  REQUEST_VALIDATION: {
    BAD_REQUEST_MESSAGE: "invalid field",
    INVAILD_TOKEN: "token not found",
  },
  DATABASE_MESSAGE: "invalid Params",
};

export default constaint;
