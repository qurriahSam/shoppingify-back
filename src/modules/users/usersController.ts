import { Request, Response, NextFunction } from 'express';
import { User } from './usersModel';
import bcrypt from 'bcrypt';

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /*   const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "Email Already Taken",
    });
  } */
  const newUser = new User(req.body);
  try {
    const registerUser = await newUser.save();
    res.status(200).json(registerUser);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Email and password are required',
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    // Send success response
    res.status(200).json({
      status: 'success',
      data: {
        userId: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};
