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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
const mongoose_1 = __importDefault(require("mongoose"));
const itemsModel_1 = require("../modules/items/itemsModel");
dotenv_1.default.config();
const URI = process.env.MONGO_URI;
function addInitData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield itemsModel_1.Category.insertMany(data_1.seedCategoryData);
            console.log('Seed data inserted successfully!');
        }
        catch (error) {
            console.error('Error inserting seed data:', error);
        }
        finally {
            mongoose_1.default.disconnect();
        }
    });
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (URI) {
        try {
            yield mongoose_1.default.connect(URI);
            console.log(`server running for seed : ${URI}`);
            addInitData();
        }
        catch (error) {
            console.error(error.message);
            process.exit(1);
        }
    }
    return;
});
connectDB();
//# sourceMappingURL=seed.js.map