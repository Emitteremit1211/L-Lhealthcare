const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    availability: { type: String, required: true },
    coverLetter: { type: String, default: "" },
    cvUrl: { type: String, required: true },
    cvFileName: { type: String, required: true },
    status: { type: String, default: "Pending" },
    submittedAt: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);