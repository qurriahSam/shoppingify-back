import express from 'express';
import dotenv from 'dotenv';

import { Items } from './modules/items/itemsModel';

import { connectDB } from './db/server';
connectDB();

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello world 2 test');
});

app.listen(PORT, (): void => {
  console.log('Your app is listening on port ' + `${PORT}`);
});
