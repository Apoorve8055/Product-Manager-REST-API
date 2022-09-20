import constaint from "../constaint/index.js";
import { signinService, signupService } from "../service/userService.js";

export const singupController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await signupService(req.body);
    response.status = constaint.STATUS_CODES.CREATED;
    response.message = constaint.USER_RESPONSE.SIGNUP_SUCCESS;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};

export const signinController = async (req, res) => {
  let response = { ...constaint.DEFAULT_SERVER_RESPONSE };
  try {
    const responseFromServer = await signinService(req.body);
    response.status = constaint.STATUS_CODES.OK;
    response.message = constaint.USER_RESPONSE.LOGIN_SUCCESS;
    response.body = responseFromServer;
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    response.message = err.message;
  }
  return res.status(response.status).send(response);
};
