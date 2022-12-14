import { AuthService } from './auth.service';
import { UsersService } from 'src/users/user.service';
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from 'express';
export declare class AuthController {
    private authService;
    private jwtService;
    private readonly usersService;
    constructor(authService: AuthService, jwtService: JwtService, usersService: UsersService);
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<import("../users/user.model").User>;
}
