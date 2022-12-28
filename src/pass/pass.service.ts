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


        if (transTypes.length == 0) {

            return false;
        }


        else if ((transport == transTypes[0].name)) {

            return true;
        }
    }

    async sortingPass(createUserDto: createPassDto, departure: string) {


        const passses = await this.getPass(createUserDto);
        let i = 0;


        var NewPAsses = [{}] as unknown as Model<Pass>;

        let find = false;

        while (i < passses.length - 1 && !find) {

            if (passses[i].departure === departure
            ) {

                find = true;

            }

            i = i + 1;
        };

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

                if (passses[k].departure === passses[i].arrival
                ) {

                    findit = true;

                }

                k = k + 1;
            };

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



        // NewPAsses =  JSON.stringify(NewPAsses) ;


        console.log(".........");














        return part1 + part2 + part3 + par4;






    }


    async create(createUserDto: createPassDto): Promise<Pass> {
        return await this.PassModel.create(createUserDto);
    }




    async getPass(createUserDto: createPassDto) {
        return await this.PassModel.find({ createUserDto }, { __v: 0, _id: 0 });

    }








}
