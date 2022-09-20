import constaint from "../constaint/index.js";
import user from "../database/model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { transformMongodbData } from "../helper/mongodbHelper.js";

export const signupService = async ({ email, password }) => {
  try {
    const checkUserexist = await user.findOne({ email });
    if (checkUserexist)
      throw new Error(constaint.USER_RESPONSE.DUPLICATE_EMAIL);
    password = await bcrypt.hash(password, parseInt(process.env.HASH_SALT));
    const newUserModelObject = new user({ email, password });
    const result = await newUserModelObject.save();
    return transformMongodbData(result);
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};

export const signinService = async ({ email, password }) => {
  try {
    const userDetails = await user.findOne({ email });
    if (!userDetails) throw new Error(constaint.USER_RESPONSE.USER_NOT_FOUND);
    const isValid = await bcrypt.compare(password, userDetails.password);
    if (!isValid) throw new Error(constaint.USER_RESPONSE.PASSWORD_INCORRECT);
    const token = jwt.sign({ id: userDetails._id0 }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return { token };
  } catch (err) {
    console.log(`Something went wrong ERROR: ${err}`);
    throw new Error(err);
  }
};
