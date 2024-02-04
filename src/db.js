import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.sloal1k.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    );
    console.log("dbconnect");
  } catch (error) {
    console.log(error);
  }
};
