import { Router, json } from 'express';
import { getHistory, getHistoryItems, getCurrentShoppingList } from './shoppingController';

const jsonParser = json();
const shoppingRouter = Router();

shoppingRouter.get('/history', getHistory);
shoppingRouter.post('/history', jsonParser, getHistoryItems);
shoppingRouter.get('/current', getCurrentShoppingList);

export default shoppingRouter;
