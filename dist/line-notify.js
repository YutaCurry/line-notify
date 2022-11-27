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
exports.lineNotify = void 0;
const clients_1 = require("./clients");
function lineNotify(message, lineNotifyToken) {
    return __awaiter(this, void 0, void 0, function* () {
        // const url =  
        // const options = {
        //     method: 'post',
        //     contentType: 'application/x-www-form-urlencoded',
        //     headers: {
        //         Authorization: `Bearer ${lineNotifyToken}`,
        //     },
        //     payload,
        // }
        const res = yield clients_1.defaultClient.post('https://notify-api.line.me/api/notify', {
            message,
        }, {
            headers: {
                Authorization: `Bearer ${lineNotifyToken}`,
                'content-type': 'application/x-www-form-urlencoded',
            }
        });
        return {
            status: res.status,
            headers: res.headers,
            data: res.data,
        };
    });
}
exports.lineNotify = lineNotify;
//# sourceMappingURL=line-notify.js.map