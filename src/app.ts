import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// declare a route with a response
app.get('/', (req, res) => {
  res.send('Hello world 2 test');
});

// start the server
app.listen(process.env.BACK_PORT, () => {
  console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
