const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// GET all appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ createdAt: -1 });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// CREATE appointment
router.post("/", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const saved = await appointment.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// UPDATE appointment status
router.put("/:id", async (req, res) => {
    try {
        const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE appointment
router.delete("/:id", async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: "Appointment deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;