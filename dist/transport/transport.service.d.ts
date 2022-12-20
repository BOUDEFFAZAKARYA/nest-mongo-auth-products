import { Document, Model, Types } from 'mongoose';
import { Transport, TransportDocument } from './schema/model.trans';
import { createDto } from './transDTO/createDTO';
export declare class TransportService {
    private readonly transportModel;
    constructor(transportModel: Model<TransportDocument>);
    create(createUserDto: createDto): Promise<Transport>;
    getPass(createUserDto: createDto): Promise<(Document<unknown, any, Transport> & Transport & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
    isInPassList(name: string): Promise<(Document<unknown, any, Transport> & Transport & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>)[]>;
}
