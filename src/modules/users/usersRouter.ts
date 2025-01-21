import { json, Router } from 'express';
import { loginUser, registerUser } from './usersController';

const userRouter = Router();
const jsonParser = json();

userRouter.post('/login', jsonParser, loginUser);
userRouter.post('/register', jsonParser, registerUser);

export default userRouter;
