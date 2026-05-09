import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    LayoutDashboard,
    Briefcase,
    Trash2,
    Pencil,
    Plus,
    LogOut,
    MoreVertical,
    Activity,
    X,
    MapPin,
    Building2,
    Clock,
    DollarSign,
    Tag,
} from "lucide-react";

const API = "https://l-lhealthcare.onrender.com/api/jobs";

const emptyForm = {
    title: "",
    company: "",
    location: "",
    type: "Full-Time",
    salary: "",
    category: "",
    experience: "",
    deadline: "",
    summary: "",
    description: "",
    requirements: "",
    benefits: "",
};

const Adminpanel = () => {
    const [jobs, setJobs] = useState([]);
    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [formData, setFormData] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchJobs = async () => {
        try {
            const res = await axios.get(API);
            setJobs(res.data);
        } catch (err) {
            console.error("Failed to fetch jobs", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "/adminlogin";
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title || !formData.company || !formData.location) return;

        try {
            if (editingId) {
                await axios.put(`${API}/${editingId}`, formData);
            } else {
                await axios.post(API, formData);
            }
            setFormData(emptyForm);
            setEditingId(null);
            setShowForm(false);
            fetchJobs();
        } catch (err) {
            console.error("Failed to save job", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            setDeleteId(null);
            fetchJobs();
        } catch (err) {
            console.error("Failed to delete job", err);
        }
    };

    const handleEdit = (job) => {
        setFormData({
            title: job.title || "",
            company: job.company || "",
            location: job.location || "",
            type: job.type || "Full-Time",
            salary: job.salary || "",
            category: job.category || "",
            experience: job.experience || "",
            deadline: job.deadline || "",
            summary: job.summary || "",
            description: job.description || "",
            requirements: job.requirements || "",
            benefits: job.benefits || "",
        });
        setEditingId(job._id);
        setShowForm(true);
        setActiveTab("jobs");
        setSidebarOpen(false);
    };

    const Sidebar = () => (
        <aside className="w-64 bg-[#1B3A5C] text-white p-6 flex flex-col min-h-screen">
            <div className="mb-10">
                <h1 className="text-xl font-bold">L&L Healthcare</h1>
                <p className="text-white/50 text-xs mt-1">Admin Panel</p>
            </div>

            <nav className="space-y-2 flex-1">
                <button
                    onClick={() => { setActiveTab("dashboard"); setSidebarOpen(false); }}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition text-sm font-medium ${activeTab === "dashboard" ? "bg-white text-[#1B3A5C]" : "hover:bg-[#254c75] text-white"}`}
                >
                    <LayoutDashboard size={18} /> Dashboard
                </button>
                <button
                    onClick={() => { setActiveTab("jobs"); setSidebarOpen(false); }}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg transition text-sm font-medium ${activeTab === "jobs" ? "bg-white text-[#1B3A5C]" : "hover:bg-[#254c75] text-white"}`}
                >
                    <Briefcase size={18} /> Job Listings
                </button>
            </nav>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full p-3 rounded-lg bg-white/10 hover:bg-cyan-800 transition mt-auto text-sm"
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

            {/* OVERLAY */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* DESKTOP SIDEBAR */}
            <div className="hidden md:flex"><Sidebar /></div>

            {/* MOBILE SIDEBAR */}
            <div className={`fixed top-0 left-0 z-50 transform transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Sidebar />
            </div>

            {/* MAIN */}
            <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0 overflow-y-auto">

                {/* DASHBOARD */}
                {activeTab === "dashboard" && (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-[#1B3A5C]">Dashboard Overview</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Total Jobs</p>
                                <p className="text-4xl font-bold text-[#1B3A5C] mt-1">{jobs.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Active Listings</p>
                                <p className="text-4xl font-bold text-green-600 mt-1">{jobs.length}</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                                <p className="text-gray-500 text-sm">Last Update</p>
                                <p className="text-sm font-semibold text-[#1B3A5C] mt-1">
                                    {jobs.length ? new Date(jobs[0].createdAt).toLocaleString() : "No activity yet"}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold text-[#1B3A5C] mb-4">Recent Jobs</h3>
                            {loading ? (
                                <p className="text-gray-400 text-sm">Loading...</p>
                            ) : jobs.length === 0 ? (
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
                            <div className="flex items-center gap-2 mb-4">
                                <Activity size={18} className="text-[#1B3A5C]" />
                                <h3 className="text-lg font-semibold text-[#1B3A5C]">Activity Log</h3>
                            </div>
                            {jobs.length === 0 ? (
                                <p className="text-gray-400 text-sm">No activity yet</p>
                            ) : (
                                jobs.slice(0, 5).map((job, i) => (
                                    <p key={i} className="text-sm border-l-2 border-[#1B3A5C] pl-3 mb-2 text-gray-600">
                                        Added <b className="text-[#1B3A5C]">{job.title}</b> at {job.company}
                                    </p>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {/* JOBS */}
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

                        {loading ? (
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

                                                {job.summary && (
                                                    <p className="text-sm text-gray-600 leading-relaxed mb-2">{job.summary}</p>
                                                )}

                                                {job.description && (
                                                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{job.description}</p>
                                                )}

                                                {job.deadline && (
                                                    <p className="text-xs text-red-500 mt-3">Deadline: {job.deadline}</p>
                                                )}
                                            </div>

                                            <div className="flex flex-col gap-2 flex-shrink-0">
                                                <button
                                                    onClick={() => handleEdit(job)}
                                                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100 transition text-xs font-medium"
                                                >
                                                    <Pencil size={13} /> Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteId(job._id)}
                                                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition text-xs font-medium"
                                                >
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
            </main>

            {/* ADD/EDIT FORM MODAL */}
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
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary / Pay Rate</label>
                                    <input name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. $75,000/yr" className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Short Summary <span className="text-gray-400 text-xs">(shown on job card)</span></label>
                                <textarea name="summary" value={formData.summary} onChange={handleChange} placeholder="Brief overview of the role." rows={2} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Job Description <span className="text-gray-400 text-xs">(shown on detail page)</span></label>
                                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Full details about the role..." rows={5} className="w-full border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 resize-y" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements / Qualifications</label>
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

            {/* DELETE CONFIRM MODAL */}
            {deleteId && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6">
                        <h3 className="font-bold text-red-600 text-lg mb-2">Delete Job</h3>
                        <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this job? This cannot be undone.</p>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setDeleteId(null)} className="px-5 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">Cancel</button>
                            <button onClick={() => handleDelete(deleteId)} className="px-5 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Adminpanel;