import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransportController } from './transport.controller';
import { TransportService } from './transport.service';

import { Transport, TransportSchema } from './schema/model.trans';

@Module({  imports: [
    MongooseModule.forFeature([{ name: "Transport", schema:TransportSchema }]),
],

controllers: [TransportController],
providers: [TransportService],

exports: [TransportService]



})
export class TransportModule {}

  








