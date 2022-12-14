
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()






export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>) { }
    async createUser(username: string, password: string): Promise<User> {
        return this.userModel.create({
            username,
            password,
        });
    }
    async getUser(query: object ): Promise<User> {
        return this.userModel.findOne(query);
    }

    async findOne(condition: any): Promise<User> {


        return this.userModel.findOne(condition);
    }
}