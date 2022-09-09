"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WppModule = void 0;
var wpp_controller_1 = require("./shared/wpp.controller");
var wpp_service_1 = require("./shared/wpp.service");
var common_1 = require("@nestjs/common");
var WppModule = /** @class */ (function () {
    function WppModule() {
    }
    WppModule = __decorate([
        (0, common_1.Module)({
            imports: [],
            controllers: [
                wpp_controller_1.WppController,
            ],
            providers: [
                wpp_service_1.WppService,
            ],
            exports: [wpp_service_1.WppService]
        })
    ], WppModule);
    return WppModule;
}());
exports.WppModule = WppModule;
