const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String, required: true },
        type: { type: String, default: "Full-Time" },
        salary: { type: String },
        category: { type: String },
        experience: { type: String },
        deadline: { type: String },
        summary: { type: String },
        description: { type: String },
        requirements: { type: String },
        benefits: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);