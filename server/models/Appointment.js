const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        dob: { type: String },
        gender: { type: String },
        appointmentDate: { type: String, required: true },
        appointmentTime: { type: String, required: true },
        service: { type: String },
        notes: { type: String },
        emergencyContact: { type: String },
        insurance: { type: String },
        status: { type: String, default: "Pending" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);