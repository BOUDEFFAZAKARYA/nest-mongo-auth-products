

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Transport, TransportDocument } from './schema/model.trans';
import { createDto } from './transDTO/createDTO';

@Injectable()
export class TransportService {

    constructor(
        @InjectModel("Transport") private readonly transportModel: Model<TransportDocument>
    ) { }


    async create(createUserDto: createDto): Promise<Transport> {
        return await this.transportModel.create(createUserDto);
    }

    async getPass(createUserDto:createDto) {
        return await this.transportModel.find({createUserDto} , { __v: 0, _id: 0 });

    }


    async isInPassList(name : string) {


        return await this.transportModel.find( { name: name.toLowerCase()} , { __v: 0, _id: 0 }  );


    }

}