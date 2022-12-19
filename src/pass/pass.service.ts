import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createPassDto } from './dtos/createpass';
import { Pass } from './pass.model';

@Injectable()
export class PassService {


    constructor(
        @InjectModel('Product') private readonly PassModel: Model<Pass>,
    ) { }


    async create(createUserDto:createPassDto ): Promise<Pass> {
        return await this.PassModel.create(createUserDto);
    }


    async insertPass(transport: string, departure: string, arrival: number, Gate: string, seat: string, Baggage_drop: string): Promise<Pass> {
        const newPass = new this.PassModel({

            transport,
            departure,
            arrival,
            Gate,
            seat,
            Baggage_drop


        });
        const result = await newPass.save();


        return result;
    }

    async getProducts() {
        const Pass = await this.PassModel.find().exec();


        return Pass.map(prod => ({
            id: prod.id,
            transport: prod.transport,
            departure: prod.departure,
            arrival: prod.arrival,
        }));
    }








}
