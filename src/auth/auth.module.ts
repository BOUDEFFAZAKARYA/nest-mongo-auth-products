import { Module } from "@nestjs/common"
import { UserModule } from "src/users/users.module";
import { AuthService } from "./auth.service";


import { PassportModule } from "@nestjs/passport";


import { AuthController } from './auth.controller';
import { UsersService } from "src/users/user.service";
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "../users/user.model"
import {JwtModule} from "@nestjs/jwt";


@Module({
  imports: [UserModule, PassportModule,  JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
}), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule { }