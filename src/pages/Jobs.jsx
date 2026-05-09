import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    MapPin,
    Building2,
    Clock,
    DollarSign,
    Tag,
    Search,
    ArrowRight,
    Briefcase,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const API = "https://l-lhealthcare.onrender.com/api/jobs";
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All");

    useEffect(() => {
        const fetchJobs = async () => {
            await Promise.all([
                axios.get(API).then(res => setJobs(res.data)).catch(err => console.error("Failed to fetch jobs", err)),
                new Promise(resolve => setTimeout(resolve, 2000))
            ])
            setLoading(false)
        }
        fetchJobs()
    }, [])

    const types = ["All", "Full-Time", "Part-Time", "Contract", "Per Diem"];

    const filtered = jobs.filter((job) => {
        const matchSearch =
            job.title?.toLowerCase().includes(search.toLowerCase()) ||
            job.location?.toLowerCase().includes(search.toLowerCase()) ||
            job.category?.toLowerCase().includes(search.toLowerCase());
        const matchType = filterType === "All" || job.type === filterType;
        return matchSearch && matchType;
    });

    if (loading) return <Loader />

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-gray-50 mt-[50px]">

                {/* HERO */}
                <section className="bg-[#1B3A5C] py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Open Positions</h1>
                    <p className="mt-4 text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                        Join our team of dedicated healthcare professionals making a real difference in people's lives every day.
                    </p>

                    <div className="mt-8 max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by title, location, or category..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white/30 bg-white/10 text-white placeholder-gray-400 border border-white/20"
                        />
                    </div>
                </section>

                {/* FILTERS */}
                <div className="bg-white border-b border-gray-100 sticky top-0 z-10 px-6 py-3">
                    <div className="max-w-5xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide">
                        {types.map((t) => (
                            <button
                                key={t}
                                onClick={() => setFilterType(t)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition ${filterType === t
                                    ? "bg-[#1B3A5C] text-white"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* JOB CARDS */}
                <section className="max-w-5xl mx-auto px-6 py-12">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20">
                            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium">No jobs found</p>
                            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter</p>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            <p className="text-sm text-gray-500">{filtered.length} position{filtered.length !== 1 ? "s" : ""} available</p>

                            {filtered.map((job) => (
                                <div
                                    key={job._id}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h2 className="text-lg font-bold text-[#1B3A5C]">{job.title}</h2>
                                                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${job.type === "Full-Time" ? "bg-blue-100 text-blue-700" :
                                                    job.type === "Part-Time" ? "bg-orange-100 text-orange-700" :
                                                        "bg-purple-100 text-purple-700"
                                                    }`}>
                                                    {job.type}
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                                <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" />{job.company}</span>
                                                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                                                {job.salary && <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" />{job.salary}</span>}
                                                {job.experience && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{job.experience}</span>}
                                                {job.category && <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{job.category}</span>}
                                            </div>

                                            {job.summary && (
                                                <p className="text-sm text-gray-600 leading-relaxed mb-2">{job.summary}</p>
                                            )}

                                            {job.description && (
                                                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{job.description}</p>
                                            )}

                                            {job.deadline && (
                                                <p className="text-xs text-red-500 mt-3 font-medium">Deadline: {job.deadline}</p>
                                            )}
                                        </div>

                                        <div className="flex-shrink-0 self-end sm:self-center">
                                            <Link
                                                to={`/jobs/${job._id}`}
                                                className="flex items-center gap-2 bg-[#1B3A5C] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0F3355] transition whitespace-nowrap"
                                            >
                                                View Details <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Jobs;