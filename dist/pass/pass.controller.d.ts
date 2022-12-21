import { createPassDto } from './dtos/createpass';
import { PassService } from './pass.service';
export declare class PassController {
    private readonly PassServices;
    constructor(PassServices: PassService);
    create(createUserDto: createPassDto, Transport: string): Promise<import("./pass.model").Pass | "invalid type of transport">;
    find(createUserDto: createPassDto): Promise<(import("./pass.model").Pass & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findit(createUserDto: createPassDto, departure: string): Promise<string>;
}
