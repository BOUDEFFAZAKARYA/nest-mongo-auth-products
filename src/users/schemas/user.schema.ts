/* import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});




export interface User extends mongoose.Document {
  id: string;
  username: string;
  password: string;
} */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;




@Schema()
export class User {

    @Prop({
        unique: true
    })
    username: string;

    @Prop()
    password: string;


}

export const UserSchema = SchemaFactory.createForClass(User);