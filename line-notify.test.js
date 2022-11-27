"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(0, _1.lineNotify)('test', process.env.LINE_NOTIFY_TOKEN).then(e => console.log({ e })).catch(e => console.log(e));
//# sourceMappingURL=line-notify.test.js.map