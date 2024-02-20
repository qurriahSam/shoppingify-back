import { Request, Response, NextFunction } from 'express';
import { HistoryShopping } from './shoppingModel';

export const getHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await HistoryShopping.find({ current: false }).select('title status date');
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getHistoryItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const historyItems = await HistoryShopping.findById(req.body.id);
    res.json(historyItems);
  } catch (error) {
    next(error);
  }
};

export const getCurrentShoppingList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const currentShoppingList = await HistoryShopping.findOne({ status: 'current' }).exec();
    res.json(currentShoppingList);
  } catch (error) {
    next(error);
  }
};

export const createShoppingList = async (req: Request, res: Response, next: NextFunction) => {
  const newShoppingList = new HistoryShopping(req.body);
  try {
    const shoppingList = await newShoppingList.save();
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
};

export const updateShoppingList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const shoppingList = await HistoryShopping.findByIdAndUpdate(req.body._id, req.body, {
      returnDocument: 'after',
    });
    res.status(200).json(shoppingList);
  } catch (error) {
    next(error);
  }
};
