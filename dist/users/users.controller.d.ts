import { User } from './user.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(password: string, username: string): Promise<User>;
}
