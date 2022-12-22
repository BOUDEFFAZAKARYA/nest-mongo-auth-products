import { Body, Controller, Get, Post } from '@nestjs/common';
import { Transport } from 'src/transport/schema/model.trans';
import { createDto } from 'src/transport/transDTO/createDTO';
import { createPassDto } from './dtos/createpass';
import { PassService } from './pass.service';

@Controller('pass')
export class PassController {


    constructor(private readonly PassServices: PassService) { }




    @Post('create')
    async create(
        @Body() createUserDto: createPassDto,
        @Body("transport") Transport: string) {

        const validation = await this.PassServices.validatePass(Transport);


        if (validation) {


            return this.PassServices.create(createUserDto);
        } else {
            return "invalid type of transport" ;
        }

    }


    @Get('passes')
    async find(@Body() createUserDto: createPassDto) {
        return this.PassServices.getPass(createUserDto);
    }


    @Post('SortingPasses')
    async findit(
        @Body() createUserDto: createPassDto ,

        @Body( 'departure') departure : string , 


    )
        

    
    {
        return this.PassServices.sortingPass(createUserDto ,departure  );
    }














}
