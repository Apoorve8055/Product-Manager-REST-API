import constaint from "../constaint/index.js";

const validateObjectSchema = (data, schema) => {
  const result = schema.validate(data);
  if (result.error) {
    const errorDetails = result.error.details.map((data) => {
      return {
        error: data.message,
        path: data.path,
      };
    });
    return errorDetails;
  }
  return null;
};

export const joiSchemaValidatior = (schema) => {
  return (req, res, next) => {
    let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      response.message = constaint.REQUEST_VALIDATION.BAD_REQUEST_MESSAGE;
      return res.status(response.status).json(response);
    }
    return next();
  };
};

export const joiParamsValidatior = (schema) => {
  return (req, res, next) => {
    let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
    const error = validateObjectSchema(req.query, schema);
    if (error) {
      response.body = error;
      response.message = constaint.REQUEST_VALIDATION.BAD_REQUEST_MESSAGE;
      return res.status(response.status).json(response);
    }
    return next();
  };
};
