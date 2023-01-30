"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
// This will parse a form
app.use(body_parser_1.default.urlencoded({ extended: true }));
// adds session and options object that will have key property with 
// value of array of strings 
app.use((0, cookie_session_1.default)({ keys: ['session'] }));
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log('Listening on port');
});
