import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './user.service';

import * as bcrypt from 'bcrypt';


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}


    @Post('/signup')
    async createUser(
        @Body('password') password: string,
        @Body('username') username: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);

        const result = await this.userService.createUser(
            username,
            hashedPassword,
        );
        return result;
    }














}
