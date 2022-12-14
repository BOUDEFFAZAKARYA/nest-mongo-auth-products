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
    user(request: Request): Promise<{
        id: string;
        username: string;
        _id?: any;
        __v?: any;
        $locals: Record<string, unknown>;
        $op: "remove" | "save" | "validate";
        $where: Record<string, unknown>;
        baseModelName?: string;
        collection: import("mongoose").Collection<import("bson").Document>;
        db: import("mongoose").Connection;
        errors?: import("mongoose").Error.ValidationError;
        isNew: boolean;
        schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: any;
        }>;
    }>;
}
