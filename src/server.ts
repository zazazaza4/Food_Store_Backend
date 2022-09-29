import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';

const app = express();
dotenv.config();
dbConnect();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log('Website served on http://localhost:' + PORT);
});
