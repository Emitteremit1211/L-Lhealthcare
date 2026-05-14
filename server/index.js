const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const jobRoutes = require("./routes/jobs");
const appointmentRoutes = require("./routes/appointments");
const blockedSlotRoutes = require("./routes/blockedslots");
const applicationRoutes = require("./routes/applications");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/blockedslots", blockedSlotRoutes);
app.use("/api/applications", applicationRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => console.log(err));