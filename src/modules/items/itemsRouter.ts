import { Router, json } from 'express';
import { getItems, addItem } from './itemsController';

//const urlencodedParser = urlencoded({ extended: true })
const jsonParser = json();

const itemsRouter = Router();

itemsRouter.get('/', getItems);
itemsRouter.post('/', jsonParser, addItem);

export default itemsRouter;
