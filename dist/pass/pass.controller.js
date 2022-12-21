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
exports.PassController = void 0;
const common_1 = require("@nestjs/common");
const createpass_1 = require("./dtos/createpass");
const pass_service_1 = require("./pass.service");
let PassController = class PassController {
    constructor(PassServices) {
        this.PassServices = PassServices;
    }
    async create(createUserDto, Transport) {
        const validation = await this.PassServices.validatePass(Transport);
        if (validation) {
            return this.PassServices.create(createUserDto);
        }
        else {
            return "invalid type of transport";
        }
    }
    async find(createUserDto) {
        return this.PassServices.getPass(createUserDto);
    }
    async findit(createUserDto, departure) {
        return this.PassServices.sortingPass(createUserDto, departure);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)("transport")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createpass_1.createPassDto, String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('passes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createpass_1.createPassDto]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('SortingPasses'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)('departure')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createpass_1.createPassDto, String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "findit", null);
PassController = __decorate([
    (0, common_1.Controller)('pass'),
    __metadata("design:paramtypes", [pass_service_1.PassService])
], PassController);
exports.PassController = PassController;
//# sourceMappingURL=pass.controller.js.map