/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
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
