import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const uri = process.env.MONGO_URI;

export const connectDB = async () => {
  if (uri) {
    try {
      await mongoose.connect(uri);
      console.log(`server running : ${uri}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  return;
};
