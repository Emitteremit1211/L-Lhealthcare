import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    HeartHandshake, Calendar, Clock, Shield, Check,
    ChevronRight, ChevronLeft, Stethoscope, Brain,
    Home, Car, BriefcaseMedical, UserCheck, Star, AlertCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const API = "https://l-lhealthcare.onrender.com/api";

const STEPS = ["Personal Info", "Schedule", "Service", "Review"];

const services = [
    { id: "hha", label: "Home Health Aide", icon: HeartHandshake, desc: "Daily living assistance at home" },
    { id: "rn", label: "Registered Nurse", icon: Stethoscope, desc: "Clinical medical care at home" },
    { id: "cna", label: "Certified Nursing Assistant", icon: BriefcaseMedical, desc: "Essential hands-on care" },
    { id: "attendant", label: "Attendant Care", icon: UserCheck, desc: "Companionship & supervision" },
    { id: "mental", label: "Mental Health Support", icon: Brain, desc: "Emotional wellness care" },
    { id: "homecare", label: "Home Care Program", icon: Home, desc: "Structured long-term support" },
    { id: "transport", label: "Personal Care & Transport", icon: Car, desc: "Errands & medical trips" },
];

const ALL_TIME_SLOTS = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM",
];

const empty = {
    fullName: "", email: "", phone: "", dob: "",
    gender: "", appointmentDate: "", appointmentTime: "",
    service: "", notes: "", emergencyContact: "", insurance: "",
};

export default function Appointment() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(empty);
    const [submitted, setSubmitted] = useState(false);
    const [availability, setAvailability] = useState(null);
    const [checkingAvail, setCheckingAvail] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const selectService = (id) => setForm({ ...form, service: id });
    const selectedService = services.find((s) => s.id === form.service);

    useEffect(() => {
        if (!form.appointmentDate) return;
        const checkAvailability = async () => {
            setCheckingAvail(true);
            setForm((prev) => ({ ...prev, appointmentTime: "" }));
            try {
                const res = await axios.get(`${API}/blockedslots/availability/${form.appointmentDate}`);
                setAvailability(res.data);
            } catch (err) {
                console.error("Failed to check availability", err);
            } finally {
                setCheckingAvail(false);
            }
        };
        checkAvailability();
    }, [form.appointmentDate]);

    const isTimeUnavailable = (time) => {
        if (!availability) return false;
        if (availability.dayBlocked) return true;
        return availability.blockedTimes.includes(time) || availability.bookedTimes.includes(time);
    };

    const selectTime = (time) => {
        if (isTimeUnavailable(time)) return;
        setForm({ ...form, appointmentTime: time });
    };

    const next = () => setStep((s) => Math.min(s + 1, 3));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = async () => {
        setSubmitting(true);
        setError("");
        try {
            await axios.post(`${API}/appointments`, {
                fullName: form.fullName,
                email: form.email,
                phone: form.phone,
                dob: form.dob,
                gender: form.gender,
                appointmentDate: form.appointmentDate,
                appointmentTime: form.appointmentTime,
                service: selectedService?.label || form.service,
                notes: form.notes,
                emergencyContact: form.emergencyContact,
                insurance: form.insurance,
            });
            setSubmitted(true);
        } catch (err) {
            setError("Failed to book appointment. Please try again.");
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass = "w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-2xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1B3A5C] focus:bg-white transition-all duration-200";
    const selectClass = "w-full border-2 border-gray-100 bg-gray-50 p-4 rounded-2xl text-sm text-gray-800 focus:outline-none focus:border-[#1B3A5C] focus:bg-white transition-all duration-200";
    const labelClass = "block text-xs font-bold text-[#1B3A5C] uppercase tracking-widest mb-2";

    if (loading) return <Loader />

    if (submitted) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-2xl border border-gray-100">
                        <div className="w-20 h-20 bg-[#1B3A5C] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1B3A5C]/20">
                            <Check className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1B3A5C] mb-3">You're All Set!</h2>
                        <p className="text-gray-500 leading-relaxed mb-2">
                            Thank you, <span className="font-bold text-[#1B3A5C]">{form.fullName}</span>. Your appointment has been received.
                        </p>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Our team will contact you at <span className="font-semibold text-gray-600">{form.email}</span> within 24 hours to confirm.
                        </p>
                        <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/10 rounded-2xl p-5 text-left space-y-3 mb-8">
                            {[
                                { label: "Service", val: selectedService?.label },
                                { label: "Date", val: form.appointmentDate },
                                { label: "Time", val: form.appointmentTime },
                            ].map(({ label, val }) => (
                                <div key={label} className="flex justify-between text-sm">
                                    <span className="text-gray-400">{label}</span>
                                    <span className="font-bold text-[#1B3A5C]">{val || "—"}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => { setSubmitted(false); setForm(empty); setStep(0); setAvailability(null); }}
                            className="w-full bg-[#1B3A5C] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#0F3355] transition shadow-lg shadow-[#1B3A5C]/20"
                        >
                            Book Another Appointment
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 mt-[50px]">

                {/* HERO */}
                <div className="bg-[#1B3A5C] pt-20 pb-36 px-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `radial-gradient(circle at 80% 20%, #17B7F5 0%, transparent 50%), radial-gradient(circle at 10% 80%, #2A9D8F 0%, transparent 40%)`
                    }} />
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <p className="text-[#17B7F5] text-xs font-bold uppercase tracking-widest mb-4">L&amp;L Healthcare Staffing Solution</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
                            Book Your Care<br />
                            <span className="text-[#17B7F5]">Consultation</span>
                        </h1>
                        <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
                            Connect with our compassionate healthcare professionals. We'll match you with the right caregiver fast.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center mt-8">
                            {[
                                { icon: Shield, text: "Licensed & Insured" },
                                { icon: Star, text: "5-Star Rated" },
                                { icon: Clock, text: "24/7 Available" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-medium">
                                    <Icon className="w-3.5 h-3.5 text-[#17B7F5]" /> {text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FORM CARD */}
                <div className="max-w-3xl mx-auto px-4 -mt-24 pb-24 relative z-10">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 overflow-hidden border border-gray-100">

                        {/* STEP INDICATOR */}
                        <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                            <div className="flex items-center justify-between max-w-sm mx-auto">
                                {STEPS.map((label, i) => (
                                    <React.Fragment key={i}>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${i < step ? "bg-[#2A9D8F] text-white shadow-md shadow-[#2A9D8F]/30"
                                                : i === step ? "bg-[#1B3A5C] text-white shadow-lg shadow-[#1B3A5C]/30 scale-110"
                                                    : "bg-gray-100 text-gray-400"
                                                }`}>
                                                {i < step ? <Check className="w-4 h-4" /> : i + 1}
                                            </div>
                                            <span className={`text-xs font-semibold hidden sm:block transition-colors ${i === step ? "text-[#1B3A5C]" : i < step ? "text-[#2A9D8F]" : "text-gray-300"
                                                }`}>
                                                {label}
                                            </span>
                                        </div>
                                        {i < STEPS.length - 1 && (
                                            <div className={`flex-1 h-0.5 mx-3 rounded-full transition-all duration-500 ${i < step ? "bg-[#2A9D8F]" : "bg-gray-100"}`} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-10">

                            {/* STEP 0 — Personal Info */}
                            {step === 0 && (
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-1">Personal Information</h2>
                                        <p className="text-gray-400 text-sm">Tell us about yourself so we can personalize your care.</p>
                                    </div>
                                    <div className="space-y-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelClass}>Full Name *</label>
                                                <input className={inputClass} name="fullName" value={form.fullName} onChange={handle} placeholder="John Doe" required />
                                            </div>
                                            <div>
                                                <label className={labelClass}>Gender *</label>
                                                <select className={selectClass} name="gender" value={form.gender} onChange={handle}>
                                                    <option value="">Select gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                    <option>Prefer not to say</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelClass}>Email Address *</label>
                                                <input className={inputClass} type="email" name="email" value={form.email} onChange={handle} placeholder="yourname@email.com" required />
                                            </div>
                                            <div>
                                                <label className={labelClass}>Phone Number *</label>
                                                <input className={inputClass} type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+1 (555) 000-0000" required />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className={labelClass}>Date of Birth</label>
                                                <input className={inputClass} type="date" name="dob" value={form.dob} onChange={handle} />
                                            </div>
                                            <div>
                                                <label className={labelClass}>Emergency Contact</label>
                                                <input className={inputClass} name="emergencyContact" value={form.emergencyContact} onChange={handle} placeholder="Name & phone number" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelClass}>Insurance Provider <span className="text-gray-300 font-normal normal-case tracking-normal">(Optional)</span></label>
                                            <input className={inputClass} name="insurance" value={form.insurance} onChange={handle} placeholder="e.g. Blue Cross Blue Shield" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 1 — Schedule */}
                            {step === 1 && (
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-1">Schedule Appointment</h2>
                                        <p className="text-gray-400 text-sm">Pick your preferred date and available time slot.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <label className={labelClass}>Preferred Date *</label>
                                            <input
                                                className={inputClass}
                                                type="date"
                                                name="appointmentDate"
                                                value={form.appointmentDate}
                                                onChange={handle}
                                                min={new Date().toISOString().split("T")[0]}
                                                required
                                            />
                                        </div>

                                        {form.appointmentDate && availability?.dayBlocked && (
                                            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                                <p className="text-red-600 text-sm font-medium">This date is fully unavailable. Please select another date.</p>
                                            </div>
                                        )}

                                        {form.appointmentDate && !availability?.dayBlocked && (
                                            <div>
                                                <label className={labelClass}>
                                                    Preferred Time *
                                                    {checkingAvail && <span className="text-gray-300 font-normal normal-case tracking-normal ml-2">Checking availability...</span>}
                                                </label>
                                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                                                    {ALL_TIME_SLOTS.map((t) => {
                                                        const unavailable = isTimeUnavailable(t);
                                                        const selected = form.appointmentTime === t;
                                                        return (
                                                            <button
                                                                key={t}
                                                                type="button"
                                                                onClick={() => selectTime(t)}
                                                                disabled={unavailable}
                                                                className={`py-3 px-2 rounded-2xl text-xs font-bold border-2 transition-all duration-200 relative ${unavailable
                                                                    ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed line-through"
                                                                    : selected
                                                                        ? "bg-[#1B3A5C] text-white border-[#1B3A5C] shadow-lg shadow-[#1B3A5C]/20"
                                                                        : "bg-white text-gray-500 border-gray-100 hover:border-[#1B3A5C] hover:text-[#1B3A5C]"
                                                                    }`}
                                                            >
                                                                {t}
                                                                {unavailable && (
                                                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full" />
                                                                )}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
                                                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#1B3A5C] inline-block" /> Selected</span>
                                                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-gray-200 inline-block" /> Available</span>
                                                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400 inline-block" /> Unavailable</span>
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <label className={labelClass}>Notes <span className="text-gray-300 font-normal normal-case tracking-normal">(Optional)</span></label>
                                            <textarea
                                                className={`${inputClass} resize-none`}
                                                name="notes"
                                                value={form.notes}
                                                onChange={handle}
                                                rows={4}
                                                placeholder="Describe your symptoms, concerns, or any specific care needs..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2 — Select Service */}
                            {step === 2 && (
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-1">Select a Service</h2>
                                        <p className="text-gray-400 text-sm">Choose the type of care you need.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {services.map((s) => {
                                            const Icon = s.icon;
                                            const selected = form.service === s.id;
                                            return (
                                                <button
                                                    key={s.id}
                                                    type="button"
                                                    onClick={() => selectService(s.id)}
                                                    className={`flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 ${selected
                                                        ? "border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md"
                                                        : "border-gray-100 bg-white hover:border-[#1B3A5C]/30 hover:shadow-sm"
                                                        }`}
                                                >
                                                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${selected ? "bg-[#1B3A5C]" : "bg-gray-100"}`}>
                                                        <Icon className={`w-5 h-5 ${selected ? "text-white" : "text-gray-400"}`} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className={`font-bold text-sm ${selected ? "text-[#1B3A5C]" : "text-gray-700"}`}>{s.label}</p>
                                                        <p className="text-xs text-gray-400 mt-0.5">{s.desc}</p>
                                                    </div>
                                                    {selected && <Check className="w-5 h-5 text-[#1B3A5C] flex-shrink-0 mt-0.5" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* STEP 3 — Review */}
                            {step === 3 && (
                                <div>
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-[#1B3A5C] mb-1">Review & Confirm</h2>
                                        <p className="text-gray-400 text-sm">Check your details before confirming your booking.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-bold text-[#1B3A5C] text-xs uppercase tracking-widest">Personal Info</h3>
                                                <button onClick={() => setStep(0)} className="text-xs text-[#17B7F5] font-semibold hover:underline">Edit</button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {[
                                                    { label: "Name", val: form.fullName },
                                                    { label: "Gender", val: form.gender },
                                                    { label: "Email", val: form.email },
                                                    { label: "Phone", val: form.phone },
                                                    { label: "Emergency", val: form.emergencyContact },
                                                    { label: "Insurance", val: form.insurance || "—" },
                                                ].map(({ label, val }) => (
                                                    <div key={label}>
                                                        <p className="text-gray-400 text-xs">{label}</p>
                                                        <p className="font-bold text-[#1B3A5C] text-sm truncate">{val || "—"}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-bold text-[#1B3A5C] text-xs uppercase tracking-widest">Appointment</h3>
                                                <button onClick={() => setStep(1)} className="text-xs text-[#17B7F5] font-semibold hover:underline">Edit</button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <p className="text-gray-400 text-xs">Date</p>
                                                    <p className="font-bold text-[#1B3A5C] text-sm">{form.appointmentDate || "—"}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-400 text-xs">Time</p>
                                                    <p className="font-bold text-[#1B3A5C] text-sm">{form.appointmentTime || "—"}</p>
                                                </div>
                                            </div>
                                            {form.notes && (
                                                <div className="mt-3 pt-3 border-t border-gray-200">
                                                    <p className="text-gray-400 text-xs mb-1">Notes</p>
                                                    <p className="text-gray-600 text-sm">{form.notes}</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="font-bold text-[#1B3A5C] text-xs uppercase tracking-widest">Selected Service</h3>
                                                <button onClick={() => setStep(2)} className="text-xs text-[#17B7F5] font-semibold hover:underline">Edit</button>
                                            </div>
                                            {selectedService ? (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-[#1B3A5C] rounded-xl flex items-center justify-center">
                                                        <selectedService.icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-[#1B3A5C] text-sm">{selectedService.label}</p>
                                                        <p className="text-xs text-gray-400">{selectedService.desc}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <p className="text-gray-400 text-sm">No service selected</p>
                                            )}
                                        </div>

                                        {error && (
                                            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                                <p className="text-red-600 text-sm">{error}</p>
                                            </div>
                                        )}

                                        <div className="bg-[#1B3A5C]/5 border border-[#1B3A5C]/10 rounded-2xl p-4 text-xs text-[#1B3A5C]/70 leading-relaxed">
                                            By confirming, you agree that L&amp;L Healthcare Staffing Solution may contact you via your provided email and phone to confirm and coordinate your care appointment.
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* NAV BUTTONS */}
                            <div className="flex items-center justify-between mt-10">
                                <button
                                    type="button"
                                    onClick={back}
                                    className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-gray-100 text-sm font-bold text-gray-500 hover:border-[#1B3A5C] hover:text-[#1B3A5C] transition-all ${step === 0 ? "opacity-0 pointer-events-none" : ""}`}
                                >
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </button>

                                {step < 3 ? (
                                    <button
                                        type="button"
                                        onClick={next}
                                        className="flex items-center gap-2 bg-[#1B3A5C] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#0F3355] transition-all shadow-lg shadow-[#1B3A5C]/20"
                                    >
                                        Continue <ChevronRight className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={submitting}
                                        className="flex items-center gap-2 bg-[#1B3A5C] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#0F3355] transition-all shadow-lg shadow-[#1B3A5C]/20 disabled:opacity-60"
                                    >
                                        {submitting ? "Booking..." : <><Check className="w-4 h-4" /> Confirm Appointment</>}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom trust strip */}
                    <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                        {[
                            { icon: Shield, text: "Your data is secure & private" },
                            { icon: Clock, text: "Response within 24 hours" },
                            { icon: HeartHandshake, text: "Compassionate care guaranteed" },
                        ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2">
                                <Icon className="w-4 h-4 text-[#1B3A5C]" /> {text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}