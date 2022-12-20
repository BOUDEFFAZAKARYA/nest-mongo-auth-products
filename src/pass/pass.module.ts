import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { PassController } from './pass.controller';
import { PassSchema } from './pass.model';
import { PassService } from './pass.service';

import { TransportModule } from 'src/transport/transport.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Pass", schema: PassSchema }]),
        TransportModule
    ],

    controllers: [PassController ],
    providers: [PassService 
],
exports:[PassService]



})


export class PassModule { }