import { Model } from 'mongoose';
import { User } from './user.model';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(username: string, password: string): Promise<User>;
    getUser(query: object): Promise<User>;
}
