

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/creat-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>
    ) { }


    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create(createUserDto);
    }

    async findOne(username: string): Promise<User> {
        return await this.userModel.findOne({ username }, { __v: 0, _id: 0 });
    }

}