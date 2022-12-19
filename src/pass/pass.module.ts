import { Module } from '@nestjs/common';


import { MongooseModule } from '@nestjs/mongoose';
import { PassController } from './pass.controller';
import { PassSchema } from './pass.model';
import { PassService } from './pass.service';


@Module({imports: [
    MongooseModule.forFeature([{ name: PassModule.name, schema: PassSchema }]),
  ],

  controllers: [PassController],
  providers: [PassService],




})


export class PassModule{}