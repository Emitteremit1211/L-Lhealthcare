const express = require("express");
const router = express.Router();
const BlockedSlot = require("../models/BlockedSlot");
const Appointment = require("../models/Appointment");

// GET all blocked slots
router.get("/", async (req, res) => {
    try {
        const blocked = await BlockedSlot.find().sort({ createdAt: -1 });
        res.json(blocked);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET unavailable slots for a specific date (blocked + already booked)
router.get("/availability/:date", async (req, res) => {
    try {
        const { date } = req.params;

        // Check if whole day is blocked
        const dayBlocked = await BlockedSlot.findOne({ date, time: null });

        // Get blocked time slots for this date
        const blockedTimes = await BlockedSlot.find({ date, time: { $ne: null } });

        // Get already booked times for this date
        const bookedAppointments = await Appointment.find({ appointmentDate: date });

        res.json({
            dayBlocked: !!dayBlocked,
            blockedTimes: blockedTimes.map((b) => b.time),
            bookedTimes: bookedAppointments.map((a) => a.appointmentTime),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// BLOCK a date or time slot
router.post("/", async (req, res) => {
    try {
        const slot = new BlockedSlot(req.body);
        const saved = await slot.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UNBLOCK — delete a blocked slot
router.delete("/:id", async (req, res) => {
    try {
        await BlockedSlot.findByIdAndDelete(req.params.id);
        res.json({ message: "Slot unblocked" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;