import * as mongoose from 'mongoose';
export declare const PassSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    transport: string;
    departure: string;
    arrival: string;
    Gate: string;
    seat: string;
    Baggage_drop: string;
}>;
export interface Pass extends mongoose.Document {
    id: string;
    transport: string;
    departure: string;
    arrival: string;
    Gate: string;
    seat: string;
    boardTime: string;
    Baggage_drop: string;
}
