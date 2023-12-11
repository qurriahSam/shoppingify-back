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
    const historyItems = await HistoryShopping.findById(req.body.id).select('list');
    res.json(historyItems);
  } catch (error) {
    next(error);
  }
};

//TODO updateShoppingList
