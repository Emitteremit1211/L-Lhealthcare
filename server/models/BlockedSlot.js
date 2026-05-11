const mongoose = require("mongoose");

const blockedSlotSchema = new mongoose.Schema(
    {
        date: { type: String, required: true },
        time: { type: String, default: null },
        reason: { type: String, default: "" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("BlockedSlot", blockedSlotSchema);