"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const itemsRouter_1 = __importDefault(require("./modules/items/itemsRouter"));
const shoppingRouter_1 = __importDefault(require("./modules/shopping/shoppingRouter"));
const errorHandler_1 = require("./middleware/errorHandler");
const server_1 = require("./db/server");
(0, server_1.connectDB)();
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
/* const corsOptions = {
  origin: 'https://shoppingify-lovat.vercel.app/',
  openSuccessStatus: 200,
}; */
app.use((0, cors_1.default)());
app.use(itemsRouter_1.default);
app.use(shoppingRouter_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log('Your app is listening on port ' + `${PORT}`);
});
//# sourceMappingURL=app.js.map