"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("./usersController");
const userRouter = (0, express_1.Router)();
const jsonParser = (0, express_1.json)();
userRouter.post('/login', jsonParser, usersController_1.loginUser);
userRouter.post('/register', jsonParser, usersController_1.registerUser);
exports.default = userRouter;
//# sourceMappingURL=usersRouter.js.map