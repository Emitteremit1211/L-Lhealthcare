import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    LayoutDashboard, Briefcase, Trash2, Pencil, Plus, LogOut,
    MoreVertical, Activity, X, MapPin, Building2, Clock,
    DollarSign, Tag, CalendarDays, Ban, User, Mail, Phone,
    CheckCircle, XCircle, AlertCircle, ChevronDown,
} from "lucide-react";

const JOBS_API = "https://l-lhealthcare.onrender.com/api/jobs";
const APPT_API = "https://l-lhealthcare.onrender.com/api/appointments";
const BLOCKED_API = "https://l-lhealthcare.onrender.com/api/blockedslots";

const ALL_TIME_SLOTS = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM",
];

const emptyForm = {
    title: "", company: "", location: "", type: "Full-Time",
    salary: "", category: "", experience: "", deadline: "",
    summary: "", description: "", requirements: "", benefits: "",
};

const Adminpanel = () => {
    // Jobs state
    const [jobs, setJobs] = useState([]);
    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [jobsLoading, setJobsLoading] = useState(true);

    // Appointments state
    const [appointments, setAppointments] = useState([]);
    const [apptLoading, setApptLoading] = useState(true);
    const [deleteApptId, setDeleteApptId] = useState(null);
    const [expandedAppt, setExpandedAppt] = useState(null);

    // Blocked slots state
    const [blockedSlots, setBlockedSlots] = useState([]);
    const [blockedLoading, setBlockedLoading] = useState(true);
    const [blockDate, setBlockDate] = useState("");
    const [blockTime, setBlockTime] = useState("");
    const [blockReason, setBlockReason] = useState("");
    const [blockType, setBlockType] = useState("time"); // "time" | "day"

    // UI state
    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // ── Fetch functions ──
    const fetchJobs = async () => {
        try {
            const res = await axios.get(JOBS_API);
            setJobs(res.data);
        } catch (err) {
            console.error("Failed to fetch jobs", err);
        } finally {
            setJobsLoading(false);
            setLoading(false);
        }
    };

    const fetchAppointments = async () => {
        try {
            const res = await axios.get(APPT_API);
            setAppointments(res.data);
        } catch (err) {
            console.error("Failed to fetch appointments", err);
        } finally {
            setApptLoading(false);
        }
    };

    const fetchBlockedSlots = async () => {
        try {
            const res = await axios.get(BLOCKED_API);
            setBlockedSlots(res.data);
        } catch (err) {
            console.error("Failed to fetch blocked slots", err);
        } finally {
            setBlockedLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
        fetchAppointments();
        fetchBlockedSlots();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "/adminlogin";
    };

    // ── Job handlers ──
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.company || !formData.location) return;
        try {
            if (editingId) {
                await axios.put(`${JOBS_API}/${editingId}`, formData);
            } else {
                await axios.post(JOBS_API, formData);
            }
            setFormData(emptyForm);
            setEditingId(null);
            setShowForm(false);
            fetchJobs();
        } catch (err) {
            console.error("Failed to save job", err);
        }
    };

    const handleDeleteJob = async (id) => {
        try {
            await axios.delete(`${JOBS_API}/${id}`);
            setDeleteId(null);
            fetchJobs();
        } catch (err) {
            console.error("Failed to delete job", err);
        }
    };

    const handleEditJob = (job) => {
        setFormData({
            title: job.title || "", company: job.company || "",
            location: job.location || "", type: job.type || "Full-Time",
            salary: job.salary || "", category: job.category || "",
            experience: job.experience || "", deadline: job.deadline || "",
            summary: job.summary || "", description: job.description || "",
            requirements: job.requirements || "", benefits: job.benefits || "",
        });
        setEditingId(job._id);
        setShowForm(true);
        setActiveTab("jobs");
        setSidebarOpen(false);
    };

    // ── Appointment handlers ──
    const handleUpdateApptStatus = async (id, status) => {
        try {
            await axios.put(`${APPT_API}/${id}`, { status });
            fetchAppointments();
        } catch (err) {
            console.error("Failed to update status", err);
        }
    };

    const handleDeleteAppt = async (id) => {
        try {
            await axios.delete(`${APPT_API}/${id}`);
            setDeleteApptId(null);
            fetchAppointments();
        } catch (err) {
            console.error("Failed to delete appointment", err);
        }
    };

    // ── Blocked slot handlers ──
    const handleBlockSlot = async (e) => {
        e.preventDefault();
        if (!blockDate) return;
        try {
            await axios.post(BLOCKED_API, {
                date: blockDate,
                time: blockType === "time" ? blockTime : null,
                reason: blockReason,
            });
            setBlockDate("");
            setBlockTime("");
            setBlockReason("");
            fetchBlockedSlots();
        } catch (err) {
            console.error("Failed to block slot", err);
        }
    };

    const handleUnblock = async (id) => {
        try {
            await axios.delete(`${BLOCKED_API}/${id}`);
            fetchBlockedSlots();
        } catch (err) {
            console.error("Failed to unblock slot", err);
        }
    };

    const statusColor = (status) => {
        if (status === "Confirmed") return "bg-green-100 text-green-700";
        if (status === "Cancelled") return "bg-red-100 text-red-600";
        return "bg-amber-100 text-amber-700";
    };

    const Sidebar = () => (
        <aside className="w-64 bg-[#1B3A5C] text-white p-6 flex flex-col min-h-screen">
            <div className="mb-10">
                <h1 className="text-xl font-bold">L&Lstaffing <br />solution</h1>
                <p className="text-white/50 text-xs mt-1">Admin Panel</p>
            </div>

            <nav className="space-y-2 flex-1">
                {[
                    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
                    { id: "jobs", icon: Briefcase, label: "Job Listings" },
                    { id: "appointments", icon: CalendarDays, label: "Appointments", badge: appointments.filter(a => a.status === "Pending").length },
                    { id: "blocked", icon: Ban, label: "Blocked Slots" },
                ].map(({ id, icon: Icon, label, badge }) => (
                    <button
                        key={id}
                        onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition text-sm font-medium ${activeTab === id ? "bg-white text-[#1B3A5C]" : "hover:bg-[#254c75] text-white"}`}
                    >
                        <Icon size={18} />
                        <span className="flex-1 text-left">{label}</span>
                        {badge > 0 && (
                            <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                                {badge}
                            </span>
                        )}
                    </button>
                ))}
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full p-3 rounded-lg bg-white/10 hover:bg-[#2A9D8F] transition mt-auto text-sm"
            >
                <LogOut size={18} /> Logout
            </button>
        </aside>
    );

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* MOBILE TOPBAR */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-[#1B3A5C] text-white flex items-center justify-between p-4 z-50">
                <h1 className="font-bold text-sm">L&L Admin</h1>
                <button onClick={() => setSidebarOpen(true)}><MoreVertical size={22} /></button>
            </div>

            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            <div className="hidden md:flex"><Sidebar /></div>
            <div className={`fixed top-0 left-0 z-50 transform transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Sidebar />
            </div>

            {/* MAIN */}
            <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 overflow-y-auto">

                {/* ── DASHBOARD ── */}
                {activeTab === "dashboard" && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#1B3A5C]">Dashboard Overview</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Total Jobs</p>
                                <p className="text-4xl font-bold text-[#1B3A5C] mt-1">{jobs.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Total Appointments</p>
                                <p className="text-4xl font-bold text-[#1B3A5C] mt-1">{appointments.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Pending Appointments</p>
                                <p className="text-4xl font-bold text-amber-500 mt-1">{appointments.filter(a => a.status === "Pending").length}</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Blocked Slots</p>
                                <p className="text-4xl font-bold text-red-500 mt-1">{blockedSlots.length}</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#1B3A5C] mb-4">Recent Jobs</h3>
                                {jobs.length === 0 ? (
                                    <p className="text-gray-400 text-sm">No jobs posted yet</p>
                                ) : (
                                    <div className="space-y-3">
                                        {jobs.slice(0, 5).map((job) => (
                                            <div key={job._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                <div>
                                                    <p className="font-semibold text-[#1B3A5C] text-sm">{job.title}</p>
                                                    <p className="text-xs text-gray-500">{job.company} · {job.location}</p>
                                                </div>
                                                <span className="text-xs bg-[#1B3A5C]/10 text-[#1B3A5C] px-3 py-1 rounded-full">{job.type}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <h3 className="text-lg font-semibold text-[#1B3A5C] mb-4">Recent Appointments</h3>
                                {appointments.length === 0 ? (
                                    <p className="text-gray-400 text-sm">No appointments yet</p>
                                ) : (
                                    <div className="space-y-3">
                                        {appointments.slice(0, 5).map((appt) => (
                                            <div key={appt._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                                <div>
                                                    <p className="font-semibold text-[#1B3A5C] text-sm">{appt.fullName}</p>
                                                    <p className="text-xs text-gray-500">{appt.appointmentDate} · {appt.appointmentTime}</p>
                                                </div>
                                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColor(appt.status)}`}>{appt.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity size={18} className="text-[#1B3A5C]" />
                                <h3 className="text-lg font-semibold text-[#1B3A5C]">Activity Log</h3>
                            </div>
                            {jobs.length === 0 && appointments.length === 0 ? (
                                <p className="text-gray-400 text-sm">No activity yet</p>
                            ) : (
                                <div className="space-y-2">
                                    {appointments.slice(0, 3).map((appt, i) => (
                                        <p key={i} className="text-sm border-l-2 border-[#1B3A5C] pl-3 text-gray-600">
                                            <b className="text-[#1B3A5C]">{appt.fullName}</b> booked an appointment for {appt.appointmentDate} at {appt.appointmentTime}
                                        </p>
                                    ))}
                                    {jobs.slice(0, 3).map((job, i) => (
                                        <p key={i} className="text-sm border-l-2 border-gray-300 pl-3 text-gray-600">
                                            Job posted: <b className="text-[#1B3A5C]">{job.title}</b> at {job.company}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ── JOBS ── */}
                {activeTab === "jobs" && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-[#1B3A5C]">Job Listings</h2>
                            <button
                                onClick={() => { setShowForm(true); setEditingId(null); setFormData(emptyForm); }}
                                className="flex items-center gap-2 bg-[#1B3A5C] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0F3355] transition"
                            >
                                <Plus size={16} /> Add Job
                            </button>
                        </div>

                        {jobsLoading ? (
                            <p className="text-gray-400 text-sm">Loading...</p>
                        ) : jobs.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                                <Briefcase size={40} className="mx-auto text-gray-300 mb-3" />
                                <p className="text-gray-500">No jobs yet. Click "Add Job" to post one.</p>
                            </div>
                        ) : (
                            <div className="grid gap-5">
                                {jobs.map((job) => (
                                    <div key={job._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <h3 className="text-lg font-bold text-[#1B3A5C]">{job.title}</h3>
                                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${job.type === "Full-Time" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"}`}>
                                                        {job.type}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                                    <span className="flex items-center gap-1"><Building2 size={14} />{job.company}</span>
                                                    <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                                                    {job.salary && <span className="flex items-center gap-1"><DollarSign size={14} />{job.salary}</span>}
                                                    {job.experience && <span className="flex items-center gap-1"><Clock size={14} />{job.experience}</span>}
                                                    {job.category && <span className="flex items-center gap-1"><Tag size={14} />{job.category}</span>}
                                                </div>
                                                {job.summary && <p className="text-sm text-gray-600 leading-relaxed mb-2">{job.summary}</p>}
                                                {job.description && <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{job.description}</p>}
                                                {job.deadline && <p className="text-xs text-red-500 mt-3">Deadline: {job.deadline}</p>}
                                            </div>
                                            <div className="flex flex-col gap-2 flex-shrink-0">
                                                <button onClick={() => handleEditJob(job)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition text-xs font-medium">
                                                    <Pencil size={13} /> Edit
                                                </button>
                                                <button onClick={() => setDeleteId(job._id)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition text-xs font-medium">
                                                    <Trash2 size={13} /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ── APPOINTMENTS ── */}
                {activeTab === "appointments" && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-[#1B3A5C]">Appointments</h2>
                            <div className="flex gap-3 text-xs">
                                <span className="bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full font-semibold">Pending: {appointments.filter(a => a.status === "Pending").length}</span>
                                <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-semibold">Confirmed: {appointments.filter(a => a.status === "Confirmed").length}</span>
                                <span className="bg-red-100 text-red-600 px-3 py-1.5 rounded-full font-semibold">Cancelled: {appointments.filter(a => a.status === "Cancelled").length}</span>
                            </div>
                        </div>

                        {apptLoading ? (
                            <p className="text-gray-400 text-sm">Loading...</p>
                        ) : appointments.length === 0 ? (
                            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                                <CalendarDays size={40} className="mx-auto text-gray-300 mb-3" />
                                <p className="text-gray-500">No appointments booked yet.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {appointments.map((appt) => (
                                    <div key={appt._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                        {/* Header */}
                                        <div
                                            className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition"
                                            onClick={() => setExpandedAppt(expandedAppt === appt._id ? null : appt._id)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-[#1B3A5C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <User size={18} className="text-[#1B3A5C]" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#1B3A5C]">{appt.fullName}</p>
                                                    <p className="text-xs text-gray-500">{appt.appointmentDate} · {appt.appointmentTime} · {appt.service}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${statusColor(appt.status)}`}>{appt.status}</span>
                                                <ChevronDown size={16} className={`text-gray-400 transition-transform ${expandedAppt === appt._id ? "rotate-180" : ""}`} />
                                            </div>
                                        </div>

                                        {/* Expanded details */}
                                        {expandedAppt === appt._id && (
                                            <div className="border-t border-gray-100 p-5 space-y-5">
                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                    {[
                                                        { icon: User, label: "Full Name", val: appt.fullName },
                                                        { icon: Mail, label: "Email", val: appt.email },
                                                        { icon: Phone, label: "Phone", val: appt.phone },
                                                        { icon: CalendarDays, label: "Date", val: appt.appointmentDate },
                                                        { icon: Clock, label: "Time", val: appt.appointmentTime },
                                                        { icon: Tag, label: "Service", val: appt.service },
                                                        { icon: User, label: "Gender", val: appt.gender },
                                                        { icon: Phone, label: "Emergency", val: appt.emergencyContact || "—" },
                                                        { icon: Tag, label: "Insurance", val: appt.insurance || "—" },
                                                    ].map(({ icon: Icon, label, val }) => (
                                                        <div key={label} className="bg-gray-50 rounded-xl p-3">
                                                            <p className="text-xs text-gray-400 mb-1">{label}</p>
                                                            <p className="text-sm font-semibold text-[#1B3A5C] truncate">{val}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {appt.notes && (
                                                    <div className="bg-gray-50 rounded-xl p-4">
                                                        <p className="text-xs text-gray-400 mb-1">Notes</p>
                                                        <p className="text-sm text-gray-700">{appt.notes}</p>
                                                    </div>
                                                )}

                                                {/* Actions */}
                                                <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                                                    <button
                                                        onClick={() => handleUpdateApptStatus(appt._id, "Confirmed")}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${appt.status === "Confirmed" ? "bg-green-600 text-white" : "bg-green-50 text-green-700 hover:bg-green-100"}`}
                                                    >
                                                        <CheckCircle size={14} /> Confirm
                                                    </button>
                                                    <button
                                                        onClick={() => handleUpdateApptStatus(appt._id, "Cancelled")}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${appt.status === "Cancelled" ? "bg-red-600 text-white" : "bg-red-50 text-red-600 hover:bg-red-100"}`}
                                                    >
                                                        <XCircle size={14} /> Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleUpdateApptStatus(appt._id, "Pending")}
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${appt.status === "Pending" ? "bg-amber-500 text-white" : "bg-amber-50 text-amber-700 hover:bg-amber-100"}`}
                                                    >
                                                        <AlertCircle size={14} /> Pending
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteApptId(appt._id)}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition ml-auto"
                                                    >
                                                        <Trash2 size={14} /> Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ── BLOCKED SLOTS ── */}
                {activeTab === "blocked" && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#1B3A5C]">Blocked Slots</h2>

                        {/* Block form */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[#1B3A5C] mb-5">Block a Date or Time Slot</h3>
                            <form onSubmit={handleBlockSlot} className="space-y-4">
                                {/* Block type toggle */}
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setBlockType("time")}
                                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition ${blockType === "time" ? "bg-[#1B3A5C] text-white border-[#1B3A5C]" : "border-gray-200 text-gray-600 hover:border-[#1B3A5C]"}`}
                                    >
                                        Block Specific Time
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setBlockType("day")}
                                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 transition ${blockType === "day" ? "bg-[#1B3A5C] text-white border-[#1B3A5C]" : "border-gray-200 text-gray-600 hover:border-[#1B3A5C]"}`}
                                    >
                                        Block Entire Day
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-[#1B3A5C] uppercase tracking-widest mb-2">Date *</label>
                                        <input
                                            type="date"
                                            value={blockDate}
                                            onChange={(e) => setBlockDate(e.target.value)}
                                            min={new Date().toISOString().split("T")[0]}
                                            className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-sm focus:outline-none focus:border-[#1B3A5C] transition"
                                            required
                                        />
                                    </div>

                                    {blockType === "time" && (
                                        <div>
                                            <label className="block text-xs font-bold text-[#1B3A5C] uppercase tracking-widest mb-2">Time Slot *</label>
                                            <select
                                                value={blockTime}
                                                onChange={(e) => setBlockTime(e.target.value)}
                                                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-sm focus:outline-none focus:border-[#1B3A5C] transition"
                                                required
                                            >
                                                <option value="">Select time</option>
                                                {ALL_TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                                            </select>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#1B3A5C] uppercase tracking-widest mb-2">Reason <span className="text-gray-300 font-normal normal-case tracking-normal">(Optional)</span></label>
                                    <input
                                        type="text"
                                        value={blockReason}
                                        onChange={(e) => setBlockReason(e.target.value)}
                                        placeholder="e.g. Public holiday, Staff unavailable"
                                        className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl text-sm focus:outline-none focus:border-[#1B3A5C] transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center gap-2 bg-[#1B3A5C] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#0F3355] transition"
                                >
                                    <Ban size={16} /> {blockType === "day" ? "Block Entire Day" : "Block Time Slot"}
                                </button>
                            </form>
                        </div>

                        {/* Blocked list */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-[#1B3A5C] mb-5">Currently Blocked ({blockedSlots.length})</h3>
                            {blockedLoading ? (
                                <p className="text-gray-400 text-sm">Loading...</p>
                            ) : blockedSlots.length === 0 ? (
                                <p className="text-gray-400 text-sm">No blocked slots yet.</p>
                            ) : (
                                <div className="space-y-3">
                                    {blockedSlots.map((slot) => (
                                        <div key={slot._id} className="flex items-center justify-between p-4 bg-red-50 border border-red-100 rounded-2xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-red-100 rounded-xl flex items-center justify-center">
                                                    <Ban size={16} className="text-red-500" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-[#1B3A5C] text-sm">
                                                        {slot.date}
                                                        {slot.time ? <span className="text-gray-500 font-normal"> · {slot.time}</span> : <span className="ml-2 text-xs bg-red-200 text-red-700 px-2 py-0.5 rounded-full">Full Day</span>}
                                                    </p>
                                                    {slot.reason && <p className="text-xs text-gray-400 mt-0.5">{slot.reason}</p>}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleUnblock(slot._id)}
                                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-red-600 border border-red-200 hover:bg-red-100 transition text-xs font-semibold"
                                            >
                                                <X size={13} /> Unblock
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* JOB FORM MODAL */}
            {showForm && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-2xl my-8 shadow-2xl">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="font-bold text-[#1B3A5C] text-lg">{editingId ? "Edit Job" : "Add New Job"}</h3>
                            <button onClick={() => { setShowForm(false); setEditingId(null); setFormData(emptyForm); }} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title <span className="text-red-500">*</span></label>
                                    <input name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Registered Nurse (RN)" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-red-500">*</span></label>
                                    <input name="company" value={formData.company} onChange={handleChange} placeholder="e.g. L&L Healthcare" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location <span className="text-red-500">*</span></label>
                                    <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Randolph, MA" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                                    <select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20">
                                        <option>Full-Time</option>
                                        <option>Part-Time</option>
                                        <option>Contract</option>
                                        <option>Per Diem</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                                    <input name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. $75,000/yr" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                                    <input name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 2+ years" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <input name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Nursing" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                                <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Short Summary</label>
                                <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder="Brief overview of the role." rows={2} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Job Description</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Full details about the role..." rows={5} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-y" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                                <textarea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Each requirement on a new line." rows={4} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-y" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Benefits & Perks</label>
                                <textarea name="benefits" value={formData.benefits} onChange={handleChange} placeholder="Health insurance, paid time off, etc." rows={3} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-y" />
                            </div>
                            <div className="flex gap-3 justify-end pt-2">
                                <button type="button" onClick={() => { setShowForm(false); setEditingId(null); setFormData(emptyForm); }} className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                                <button type="submit" className="px-6 py-2.5 rounded-xl bg-[#1B3A5C] text-white text-sm font-semibold hover:bg-[#0F3355] transition flex items-center gap-2">
                                    <Plus size={16} /> {editingId ? "Update Job" : "Post Job"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* DELETE JOB MODAL */}
            {deleteId && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6">
                        <h3 className="font-bold text-red-600 text-lg mb-2">Delete Job</h3>
                        <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this job? This cannot be undone.</p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setDeleteId(null)} className="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                            <button onClick={() => handleDeleteJob(deleteId)} className="px-5 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition">Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {/* DELETE APPOINTMENT MODAL */}
            {deleteApptId && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6">
                        <h3 className="font-bold text-red-600 text-lg mb-2">Delete Appointment</h3>
                        <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this appointment? This cannot be undone.</p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setDeleteApptId(null)} className="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                            <button onClick={() => handleDeleteAppt(deleteApptId)} className="px-5 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Adminpanel;