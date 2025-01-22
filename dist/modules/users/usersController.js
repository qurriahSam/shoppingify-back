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
exports.loginUser = exports.registerUser = void 0;
const usersModel_1 = require("./usersModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    /*   const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Email Already Taken",
      });
    } */
    const newUser = new usersModel_1.User(req.body);
    try {
        const registerUser = yield newUser.save();
        res.status(200).json(registerUser);
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Email and password are required',
            });
        }
        const user = yield usersModel_1.User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid credentials',
            });
        }
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'error',
                message: 'Invalid credentials',
            });
        }
        // Send success response
        res.status(200).json({
            status: 'success',
            data: {
                userId: user._id,
                email: user.email,
            },
        });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=usersController.js.map