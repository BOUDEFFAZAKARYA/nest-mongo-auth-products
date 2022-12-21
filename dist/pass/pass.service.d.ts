import { Model } from 'mongoose';
import { TransportService } from 'src/transport/transport.service';
import { createPassDto } from './dtos/createpass';
import { Pass } from './pass.model';
export declare class PassService {
    private readonly PassModel;
    private transportservices;
    constructor(PassModel: Model<Pass>, transportservices: TransportService);
    validatePass(transport: string): Promise<boolean>;
    sortingPass(createUserDto: createPassDto, departure: string): Promise<string>;
    create(createUserDto: createPassDto): Promise<Pass>;
    getPass(createUserDto: createPassDto): Promise<(Pass & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
