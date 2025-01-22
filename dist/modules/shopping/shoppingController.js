"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShoppingStats = exports.updateShoppingList = exports.createShoppingList = exports.getCurrentShoppingList = exports.getHistoryItems = exports.getHistory = void 0;
const shoppingModel_1 = require("./shoppingModel");
const itemsModel_1 = require("../items/itemsModel");
const getHistory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield shoppingModel_1.HistoryShopping.find({
            current: false,
            userId: req.body._id,
        }).select('title status date');
        console.log(items);
        res.json(items);
    }
    catch (error) {
        next(error);
    }
});
exports.getHistory = getHistory;
const getHistoryItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const historyItems = yield shoppingModel_1.HistoryShopping.findById(req.body.id);
        res.json(historyItems);
    }
    catch (error) {
        next(error);
    }
});
exports.getHistoryItems = getHistoryItems;
const getCurrentShoppingList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentShoppingList = yield shoppingModel_1.HistoryShopping.findOne({
            current: true,
        }).exec();
        res.json(currentShoppingList);
    }
    catch (error) {
        next(error);
    }
});
exports.getCurrentShoppingList = getCurrentShoppingList;
const createShoppingList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newShoppingList = new shoppingModel_1.HistoryShopping(req.body);
    try {
        const shoppingList = yield newShoppingList.save();
        console.log(shoppingList);
        res.status(200).json(shoppingList);
    }
    catch (error) {
        next(error);
    }
});
exports.createShoppingList = createShoppingList;
const updateShoppingList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shoppingList = yield shoppingModel_1.HistoryShopping.findByIdAndUpdate(req.body._id, req.body, {
            returnDocument: 'after',
        });
        res.status(200).json(shoppingList);
    }
    catch (error) {
        next(error);
    }
});
exports.updateShoppingList = updateShoppingList;
const getShoppingStats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shoppingLists = yield shoppingModel_1.HistoryShopping.find({
            $and: [{ 'list.items.complete': true }, { date: { $exists: true } }],
        });
        const categories = yield itemsModel_1.Category.find().select('_id category');
        res
            .status(200)
            .json({ categories: categories, shoppingLists: shoppingLists });
    }
    catch (error) {
        next(error);
    }
});
exports.getShoppingStats = getShoppingStats;
//# sourceMappingURL=shoppingController.js.map