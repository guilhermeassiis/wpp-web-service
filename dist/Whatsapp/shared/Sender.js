"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sender = void 0;
const libphonenumber_js_1 = require("libphonenumber-js");
const venom_bot_1 = require("venom-bot");
class Sender {
    constructor() {
        this.initialize();
    }
    async sendText(to, body) {
        var _a;
        if (!(0, libphonenumber_js_1.isValidPhoneNumber)(to, "BR")) {
            throw new Error("This number is not valid");
        }
        let phoneNumber = (_a = (0, libphonenumber_js_1.parsePhoneNumber)(to, "BR")) === null || _a === void 0 ? void 0 : _a.format("E.164").replace('+', '');
        phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;
        await this.client.sendText(phoneNumber, body);
    }
    initialize() {
        const qr = (base64Qrimg) => { };
        const status = (statusSession) => { };
        const start = async (client) => {
            this.client = client;
        };
        (0, venom_bot_1.create)("ws-sender-hw", qr, status)
            .then((client) => start(client))
            .catch((error) => console.error(error));
    }
}
exports.Sender = Sender;
//# sourceMappingURL=Sender.js.map