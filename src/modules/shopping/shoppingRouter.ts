import { Router, json } from 'express';
import {
  getHistory,
  getHistoryItems,
  getCurrentShoppingList,
  createShoppingList,
  updateShoppingList,
  getShoppingStats,
} from './shoppingController';

const jsonParser = json();
const shoppingRouter = Router();

shoppingRouter.get('/history', getHistory);
shoppingRouter.post('/history', jsonParser, getHistoryItems);
shoppingRouter.get('/current', getCurrentShoppingList);
shoppingRouter.post('/newShopping', jsonParser, createShoppingList);
shoppingRouter.post('/updateShopping', jsonParser, updateShoppingList);
shoppingRouter.get('/stats', getShoppingStats);

export default shoppingRouter;
