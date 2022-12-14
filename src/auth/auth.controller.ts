import { Controller, Get, Post,  UseGuards , Body ,Res, BadRequestException, UnauthorizedException, Req} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { ProductsService } from 'src/products/products.service';

import { UsersService } from 'src/users/user.service';


import { JwtService } from "@nestjs/jwt";


import * as bcrypt from 'bcrypt';


import {Response , Request} from 'express';




@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService ,       private jwtService: JwtService, private readonly usersService: UsersService
      ) { }

   /*  @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    } */

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response,
    ) {
        //const user = await this.authService.findOne({email});

        const user = await this.usersService.getUser({ email });


        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }

    @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.usersService.findOne({id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

}
