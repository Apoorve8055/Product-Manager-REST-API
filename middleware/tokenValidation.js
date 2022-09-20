import jwt from "jsonwebtoken";
import constaint from "../constaint/index.js";

const tokenValidation = (req, res, next) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    if (!req.headers.authorization)
      throw new Error(constaint.REQUEST_VALIDATION.INVAILD_TOKEN);
    const token = req.headers.authorization.split("Bearer")[1].trim();
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.status = constaint.STATUS_CODES.UNAUTHORIZED;
    response.message = constaint.REQUEST_VALIDATION.INVAILD_TOKEN;
  }
  return res.status(constaint.STATUS_CODES.UNAUTHORIZED).json(response);
};

export default tokenValidation;
