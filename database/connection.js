import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURI);
    console.log("database connected!");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default connection;
