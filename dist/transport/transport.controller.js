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
exports.TransportController = void 0;
const common_1 = require("@nestjs/common");
const createDTO_1 = require("./transDTO/createDTO");
const transport_service_1 = require("./transport.service");
let TransportController = class TransportController {
    constructor(transServices) {
        this.transServices = transServices;
    }
    async create(createUserDto) {
        return this.transServices.create(createUserDto);
    }
    async find(createUserDto) {
        return this.transServices.getPass(createUserDto);
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDTO_1.createDto]),
    __metadata("design:returntype", Promise)
], TransportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('passes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDTO_1.createDto]),
    __metadata("design:returntype", Promise)
], TransportController.prototype, "find", null);
TransportController = __decorate([
    (0, common_1.Controller)('transport'),
    __metadata("design:paramtypes", [transport_service_1.TransportService])
], TransportController);
exports.TransportController = TransportController;
//# sourceMappingURL=transport.controller.js.map