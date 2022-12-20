import { Body, Controller, Get, Post } from '@nestjs/common';
import { createDto } from './transDTO/createDTO';
import { TransportService } from './transport.service';

@Controller('transport')
export class TransportController {


    constructor(private readonly transServices: TransportService) { }




    @Post('create')
    async create(@Body() createUserDto: createDto) {
        return this.transServices.create(createUserDto);
    }


    @Get('passes')
    async find(@Body() createUserDto: createDto) {
        return this.transServices.getPass(createUserDto);
    }














}
