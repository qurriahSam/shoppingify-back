"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemsController_1 = require("./itemsController");
//const urlencodedParser = urlencoded({ extended: true })
const jsonParser = (0, express_1.json)();
const itemsRouter = (0, express_1.Router)();
itemsRouter.get('/', itemsController_1.getItems);
itemsRouter.post('/', jsonParser, itemsController_1.addItem);
exports.default = itemsRouter;
//# sourceMappingURL=itemsRouter.js.map