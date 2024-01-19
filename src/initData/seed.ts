import dotenv from 'dotenv';
import { seedData } from './data';
import mongoose from 'mongoose';
import { Category } from '../modules/items/itemsModel';

dotenv.config();
const URI = process.env.MONGO_URI;

async function addInitData() {
  try {
    await Category.insertMany(seedData);
    console.log('Seed data inserted successfully!');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  } finally {
    mongoose.disconnect();
  }
}

const connectDB = async () => {
  if (URI) {
    try {
      await mongoose.connect(URI);
      console.log(`server running for seed : ${URI}`);
      addInitData();
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  return;
};

connectDB();
