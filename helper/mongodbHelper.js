import mongoose from "mongoose";
import constaint from "../constaint/index.js";

export const transformMongodbData = (data) => {
  if (Array.isArray(data)) {
    let newDataArray = [];
    data.forEach((element) => {
      newDataArray.push(element.toObject());
    });
    return newDataArray;
  }
  return data.toObject();
};

export const checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id))
    throw new Error(constaint.DATABASE_MESSAGE);
};
