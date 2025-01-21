import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import itemsRouter from './modules/items/itemsRouter';
import shoppingRouter from './modules/shopping/shoppingRouter';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './db/server';
import userRouter from './modules/users/usersRouter';

connectDB();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

/* const corsOptions = {
  origin: 'https://shoppingify-lovat.vercel.app/',
  openSuccessStatus: 200,
}; */
app.use(cors());

app.use(userRouter);
app.use(itemsRouter);
app.use(shoppingRouter);

app.use(errorHandler);

app.listen(PORT, (): void => {
  console.log('Your app is listening on port ' + `${PORT}`);
});
