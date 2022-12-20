"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TransportService = class TransportService {
    constructor(transportModel) {
        this.transportModel = transportModel;
    }
    async create(createUserDto) {
        return await this.transportModel.create(createUserDto);
    }
    async getPass(createUserDto) {
        return await this.transportModel.find({ createUserDto }, { __v: 0, _id: 0 });
    }
    async isInPassList(name) {
        return await this.transportModel.find({ name: name.toLowerCase() }, { __v: 0, _id: 0 });
    }
};
TransportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Transport")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransportService);
exports.TransportService = TransportService;
//# sourceMappingURL=transport.service.js.map