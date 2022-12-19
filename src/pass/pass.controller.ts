import { Body, Controller, Post } from '@nestjs/common';
import { createPassDto } from './dtos/createpass';
import { PassService } from './pass.service';

@Controller('pass')
export class PassController {


    constructor(private readonly PassServices: PassService) { }




    @Post('create')
    async create(@Body() createUserDto: createPassDto) {
        return this.PassServices.create(createUserDto);
    }











}
