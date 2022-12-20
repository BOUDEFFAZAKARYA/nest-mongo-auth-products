"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassSchema = void 0;
const mongoose = require("mongoose");
exports.PassSchema = new mongoose.Schema({
    transport: { type: String, required: true, },
    departure: { type: String, required: true },
    arrival: { type: String, required: true },
    Gate: { type: String, required: true },
    seat: { type: String, required: true },
    Baggage_drop: { type: String, required: true },
});
//# sourceMappingURL=pass.model.js.map