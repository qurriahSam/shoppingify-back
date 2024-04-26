"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryShopping = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const HistoryShoppingSchema = new Schema({
    title: { type: String, required: true },
    list: [
        {
            category: String,
            items: [
                {
                    _id: { type: String, required: true },
                    name: String,
                    complete: Boolean,
                    count: Number,
                },
            ],
        },
    ],
    status: String,
    current: Boolean,
    date: Date,
});
exports.HistoryShopping = mongoose_1.default.model('historyShopping', HistoryShoppingSchema);
//# sourceMappingURL=shoppingModel.js.map