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
exports.PassService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const transport_service_1 = require("../transport/transport.service");
let PassService = class PassService {
    constructor(PassModel, transportservices) {
        this.PassModel = PassModel;
        this.transportservices = transportservices;
    }
    async validatePass(transport) {
        const transTypes = await this.transportservices.isInPassList(transport);
        console.log(transport);
        if (transTypes.length == 0) {
            return false;
        }
        else if ((transport == transTypes[0].name)) {
            return true;
        }
    }
    async sortingPass(createUserDto) {
        const passses = this.getPass(createUserDto);
        console.log(passses[0].departure);
        console.log(passses[0].arrival);
    }
    async create(createUserDto) {
        return await this.PassModel.create(createUserDto);
    }
    async getPass(createUserDto) {
        return await this.PassModel.find({ createUserDto }, { __v: 0, _id: 0 });
    }
};
PassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Pass')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        transport_service_1.TransportService])
], PassService);
exports.PassService = PassService;
//# sourceMappingURL=pass.service.js.map