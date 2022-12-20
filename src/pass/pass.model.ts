import * as mongoose from 'mongoose';

export const PassSchema = new mongoose.Schema({


    transport: { type: String, required: true , },

    departure: { type: String, required: true },


    arrival: { type: String, required: true },



    Gate: { type: String, required: true },

    seat: { type: String, required: true },



    Baggage_drop: { type: String, required: true },

});


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