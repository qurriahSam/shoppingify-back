import { Request, Response, NextFunction } from 'express';
import { HistoryShopping } from './shoppingModel';

export const getHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await HistoryShopping.find().select('title status date');
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
