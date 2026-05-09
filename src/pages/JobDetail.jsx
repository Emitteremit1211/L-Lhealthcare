import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
    MapPin,
    Building2,
    Clock,
    DollarSign,
    Tag,
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Gift,
    FileText,
    Send,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const API = "https://l-lhealthcare.onrender.com/api/jobs";
const JobDetail = () => {
    const { id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            const [res] = await Promise.all([
                axios.get(`${API}/${id}`).catch(() => {
                    setNotFound(true)
                    return null
                }),
                new Promise(resolve => setTimeout(resolve, 2000)) // minimum 2 seconds
            ])
            if (res) setJob(res.data)
            setLoading(false)
        }
        fetchJob()
    }, [id])

    if (loading) return <Loader />

    if (notFound || !job) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-gray-500 text-lg font-medium">Job not found</p>
                        <p className="text-gray-400 text-sm mt-2">This job may no longer be available or network is unavailable.</p>
                        <Link to="/jobs" className="mt-4 inline-block text-[#1B3A5C] underline text-sm">
                            ← Back to Jobs
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const renderLines = (text) =>
        text.split("\n").filter(Boolean).map((line, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#1B3A5C] mt-0.5 flex-shrink-0" />
                <span>{line}</span>
            </li>
        ));

    return (
        <>
            <Navbar />

            {/* RETURN LINK */}
            <div className="bg-white border-b border-gray-100 px-6 py-3">
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/jobs"
                        className="flex items-center gap-2 text-[#1B3A5C] text-sm font-medium hover:opacity-70 transition w-fit"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Return to Job Listings
                    </Link>
                </div>
            </div>

            <div className="min-h-screen bg-gray-50">

                {/* HERO */}
                <section className="bg-[#1B3A5C] py-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white">{job.title}</h1>
                                    <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${job.type === "Full-Time" ? "bg-blue-500/20 text-blue-200" :
                                        job.type === "Part-Time" ? "bg-orange-500/20 text-orange-200" :
                                            "bg-purple-500/20 text-purple-200"
                                        }`}>
                                        {job.type}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-5 text-sm text-gray-300">
                                    <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{job.company}</span>
                                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />{job.location}</span>
                                    {job.salary && <span className="flex items-center gap-2"><DollarSign className="w-4 h-4" />{job.salary}</span>}
                                    {job.experience && <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{job.experience}</span>}
                                    {job.category && <span className="flex items-center gap-2"><Tag className="w-4 h-4" />{job.category}</span>}
                                </div>

                                {job.deadline && (
                                    <p className="mt-3 flex items-center gap-2 text-red-300 text-sm">
                                        <CalendarDays className="w-4 h-4" /> Application Deadline: {job.deadline}
                                    </p>
                                )}
                            </div>

                            <Link
                                to="/apply"
                                className="flex items-center gap-2 bg-white text-[#1B3A5C] px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition flex-shrink-0 self-start md:self-center"
                            >
                                <Send className="w-4 h-4" /> Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* BODY */}
                <section className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">

                        {job.summary && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h2 className="text-lg font-bold text-[#1B3A5C] mb-3 flex items-center gap-2">
                                    <FileText className="w-5 h-5" /> About the Role
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed">{job.summary}</p>
                            </div>
                        )}

                        {job.description && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h2 className="text-lg font-bold text-[#1B3A5C] mb-3">Job Description</h2>
                                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{job.description}</div>
                            </div>
                        )}

                        {job.requirements && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h2 className="text-lg font-bold text-[#1B3A5C] mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> Requirements & Qualifications
                                </h2>
                                <ul className="space-y-2">
                                    {renderLines(job.requirements)}
                                </ul>
                            </div>
                        )}

                        {job.benefits && (
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h2 className="text-lg font-bold text-[#1B3A5C] mb-4 flex items-center gap-2">
                                    <Gift className="w-5 h-5" /> Benefits & Perks
                                </h2>
                                <ul className="space-y-2">
                                    {renderLines(job.benefits)}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-5">
                        <div className="bg-[#1B3A5C] text-white rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Interested?</h3>
                            <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                                Apply today and our team will reach out within 24 hours.
                            </p>
                            <Link
                                to="/apply"
                                className="flex items-center justify-center gap-2 bg-white text-[#1B3A5C] w-full py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition"
                            >
                                <Send className="w-4 h-4" /> Apply Now
                            </Link>
                            <Link
                                to="/jobs"
                                className="flex items-center justify-center gap-2 border border-white/20 text-white w-full py-3 rounded-xl font-medium text-sm hover:bg-white/10 transition mt-3"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to All Jobs
                            </Link>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-[#1B3A5C] mb-4">Job Summary</h3>
                            <div className="space-y-3 text-sm">
                                {[
                                    { icon: Building2, label: "Company", val: job.company },
                                    { icon: MapPin, label: "Location", val: job.location },
                                    { icon: Clock, label: "Type", val: job.type },
                                    { icon: DollarSign, label: "Salary", val: job.salary },
                                    { icon: Tag, label: "Category", val: job.category },
                                    { icon: CalendarDays, label: "Deadline", val: job.deadline },
                                ].filter(i => i.val).map(({ icon: Icon, label, val }) => (
                                    <div key={label} className="flex items-start gap-3 text-gray-600">
                                        <Icon className="w-4 h-4 text-[#1B3A5C] mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-400">{label}</p>
                                            <p className="font-medium text-gray-700">{val}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default JobDetail;