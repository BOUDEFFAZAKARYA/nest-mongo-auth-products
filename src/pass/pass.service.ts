import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createDto } from 'src/transport/transDTO/createDTO';
import { TransportService } from 'src/transport/transport.service';
import { createPassDto } from './dtos/createpass';
import { Pass } from './pass.model';

@Injectable()
export class PassService {


    constructor(
        @InjectModel('Pass') private readonly PassModel: Model<Pass>,

        private transportservices: TransportService
    ) { }

    async validatePass(transport: string): Promise<boolean> {





        const transTypes = await this.transportservices.isInPassList(transport);


        console.log(transport);



        if (transTypes.length == 0) {

            return false;
        }


        else if ((transport == transTypes[0].name)) {

            return true;
        }
    }

    async sortingPass(createUserDto: createPassDto ,){


    const passses =    this.getPass(createUserDto);


   console.log(passses[0].departure ) ;
console.log( passses[0].arrival)
    ;



    }


    async create(createUserDto: createPassDto): Promise<Pass> {
        return await this.PassModel.create(createUserDto);
    }




    async getPass(createUserDto: createPassDto) {
        return await this.PassModel.find({ createUserDto }, { __v: 0, _id: 0 });

    }








}
