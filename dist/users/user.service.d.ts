import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/creat-user.dto';
import { User, UserDocument } from './schemas/user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<User>;
}
