"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ItemSchema = new Schema({
    name: { type: String, required: true },
    image: String,
    note: String,
});
const CategorySchema = new Schema({
    category: { type: String, required: true },
    items: [ItemSchema],
});
exports.Category = mongoose_1.default.model('Category', CategorySchema);
//# sourceMappingURL=itemsModel.js.map