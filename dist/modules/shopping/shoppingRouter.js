"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shoppingController_1 = require("./shoppingController");
const jsonParser = (0, express_1.json)();
const shoppingRouter = (0, express_1.Router)();
shoppingRouter.get('/history', shoppingController_1.getHistory);
shoppingRouter.post('/history', jsonParser, shoppingController_1.getHistoryItems);
shoppingRouter.get('/current', shoppingController_1.getCurrentShoppingList);
shoppingRouter.post('/newShopping', jsonParser, shoppingController_1.createShoppingList);
shoppingRouter.post('/updateShopping', jsonParser, shoppingController_1.updateShoppingList);
shoppingRouter.get('/stats', shoppingController_1.getShoppingStats);
exports.default = shoppingRouter;
//# sourceMappingURL=shoppingRouter.js.map