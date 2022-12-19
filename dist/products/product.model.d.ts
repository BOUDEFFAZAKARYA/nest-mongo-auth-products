import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    description: string;
    price: number;
    image?: string;
}>;
export interface Product extends mongoose.Document {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}
