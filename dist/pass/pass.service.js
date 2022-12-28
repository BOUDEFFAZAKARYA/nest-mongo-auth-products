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
        if (transTypes.length == 0) {
            return false;
        }
        else if ((transport == transTypes[0].name)) {
            return true;
        }
    }
    async sortingPass(createUserDto, departure) {
        const passses = await this.getPass(createUserDto);
        let i = 0;
        var NewPAsses = [{}];
        let find = false;
        while (i < passses.length - 1 && !find) {
            if (passses[i].departure === departure) {
                find = true;
            }
            i = i + 1;
        }
        ;
        i = i - 1;
        NewPAsses[0] = passses[i];
        let findit = false;
        let k = 0;
        for (let j = 0; j < passses.length - 1; j++) {
            k = 0;
            console.log(passses[i].arrival);
            console.log(i);
            while (k < passses.length && !findit) {
                console.log("i" + i);
                console.log(passses[i].arrival);
                console.log("k" + k);
                if (passses[k].departure === passses[i].arrival) {
                    findit = true;
                }
                k = k + 1;
            }
            ;
            console.log("k" + k);
            i = k - 1;
            findit = false;
            NewPAsses[j + 1] = passses[i];
        }
        console.log(i);
        const part1 = " 1 / Take " + NewPAsses[0].transport + " from " + NewPAsses[0].departure + " to " + NewPAsses[0].arrival + ". Sit in seat " + NewPAsses[0].seat + ", gate " + NewPAsses[0].Gate + " , baggage drop " + NewPAsses[0].Baggage_drop + "." + "\n"
            + "2 / Take " + NewPAsses[1].transport + " from " + NewPAsses[1].departure + " to " + NewPAsses[1].arrival + ". Sit in seat " + NewPAsses[1].seat + ", gate " + NewPAsses[1].Gate + " , baggage drop " + NewPAsses[1].Baggage_drop + "." + "\n";
        const part2 = "3 / Take " + NewPAsses[2].transport + " from " + NewPAsses[2].departure + " to " + NewPAsses[2].arrival + ". Sit in seat " + NewPAsses[2].seat + ", gate " + NewPAsses[2].Gate + " , baggage drop " + NewPAsses[2].Baggage_drop + "." + "\n";
        const part3 = "4 / Take " + NewPAsses[3].transport + " from " + NewPAsses[3].departure + " to " + NewPAsses[3].arrival + ". Sit in seat " + NewPAsses[3].seat + ", gate " + NewPAsses[3].Gate + " , baggage drop " + NewPAsses[3].Baggage_drop + "." + "\n";
        const par4 = "5 / You have arrived at your final destination";
        const json = { data: [NewPAsses] };
        console.log(".........");
        return part1 + part2 + part3 + par4;
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