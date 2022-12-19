
import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {


    @ApiProperty({ example: 1, description: 'The age of the Cat' })


    title: string;

    @ApiProperty({ example: 1, description: 'The age of the Cat' })

  description: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })

  price: number;

}