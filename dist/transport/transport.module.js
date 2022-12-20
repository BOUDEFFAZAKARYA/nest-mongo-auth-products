"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const transport_controller_1 = require("./transport.controller");
const transport_service_1 = require("./transport.service");
const model_trans_1 = require("./schema/model.trans");
let TransportModule = class TransportModule {
};
TransportModule = __decorate([
    (0, common_1.Module)({ imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "Transport", schema: model_trans_1.TransportSchema }]),
        ],
        controllers: [transport_controller_1.TransportController],
        providers: [transport_service_1.TransportService],
        exports: [transport_service_1.TransportService]
    })
], TransportModule);
exports.TransportModule = TransportModule;
//# sourceMappingURL=transport.module.js.map