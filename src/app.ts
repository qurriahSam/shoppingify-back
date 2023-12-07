import express from 'express';
import dotenv from 'dotenv';

import itemsRouter from './modules/items/itemsRouter';

import { connectDB } from './db/server';
connectDB();

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(itemsRouter);

app.listen(PORT, (): void => {
  console.log('Your app is listening on port ' + `${PORT}`);
});
