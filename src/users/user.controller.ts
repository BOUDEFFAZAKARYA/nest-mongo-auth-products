import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/creat-user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }


    @Post('create')
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
}