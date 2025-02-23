import { Request, Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: Request, res: Response) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({ message: err.message });
};
