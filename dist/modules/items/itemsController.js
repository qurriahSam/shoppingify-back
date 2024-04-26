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
exports.addItem = exports.getItems = void 0;
const itemsModel_1 = require("./itemsModel");
const getItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield itemsModel_1.Category.find();
        res.json(items);
    }
    catch (error) {
        next(error);
    }
});
exports.getItems = getItems;
const addItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let category;
    //  console.log(req.body);
    if (!req.body.category) {
        return next(new Error('category cannot be empty'));
    }
    if (!req.body.categoryId) {
        category = new itemsModel_1.Category({
            category: req.body.category,
            items: [req.body.item],
        });
        try {
            const saveCategory = yield category.save();
            res.status(200).json(saveCategory);
        }
        catch (error) {
            next(error);
        }
    }
    else {
        try {
            const updateCategory = yield itemsModel_1.Category.findByIdAndUpdate(req.body.categoryId, { $push: { items: req.body.item } }, { new: true });
            res.status(200).json({
                _id: updateCategory === null || updateCategory === void 0 ? void 0 : updateCategory._id,
                category: updateCategory === null || updateCategory === void 0 ? void 0 : updateCategory.category,
                items: [updateCategory === null || updateCategory === void 0 ? void 0 : updateCategory.items.slice(-1)[0]],
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    }
});
exports.addItem = addItem;
//# sourceMappingURL=itemsController.js.map