import React, { useState, useMemo, useEffect, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import applyImage from "../assets/application.avif";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import {
  User, Mail, Phone, Briefcase, FileText,
  Upload, CheckCircle, ArrowRight, MapPin, Clock,
} from "lucide-react";

const CLOUDINARY_CLOUD_NAME = "dqetbfrka";
const CLOUDINARY_UPLOAD_PRESET = "ll-staffing-cvs";
const APPLICATIONS_API = "https://l-lhealthcare.onrender.com/api/applications";

const roles = [
  "Home Health Aide (HHA)",
  "Attendant Care Specialist (ACS)",
  "Certified Nursing Assistant (CNA)",
  "Registered Nurse (RN)",
  "Personal Care Assistant",
  "Mental Health Support Worker",
  "Home Care Program Coordinator",
];

const experienceLevels = [
  "Entry Level (0-1 years)",
  "Junior (1-2 years)",
  "Mid Level (2-5 years)",
  "Senior (5+ years)",
];

const availabilities = [
  "Full-Time", "Part-Time", "Contract", "Per Diem", "Flexible",
];

const Apply = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const [role, setRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState(null);
  const [cvName, setCvName] = useState("");
  const [error, setError] = useState("");

  const formRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const countries = useMemo(() => {
    const list = [
      ["NG", "Nigeria", "+234"],
      ["US", "United States", "+1"],
      ["GB", "United Kingdom", "+44"],
      ["CA", "Canada", "+1"],
      ["DE", "Germany", "+49"],
      ["FR", "France", "+33"],
      ["IN", "India", "+91"],
      ["ZA", "South Africa", "+27"],
      ["AU", "Australia", "+61"],
      ["BR", "Brazil", "+55"],
      ["CN", "China", "+86"],
      ["JP", "Japan", "+81"],
      ["IT", "Italy", "+39"],
      ["ES", "Spain", "+34"],
      ["MX", "Mexico", "+52"],
      ["KE", "Kenya", "+254"],
      ["GH", "Ghana", "+233"],
      ["EG", "Egypt", "+20"],
      ["SA", "Saudi Arabia", "+966"],
      ["AE", "UAE", "+971"],
      ["PH", "Philippines", "+63"],
      ["JM", "Jamaica", "+1-876"],
    ];
    return list.map(([code, name, dial]) => ({
      value: name,
      label: `${getFlag(code)} ${name} (${dial})`,
    }));
  }, []);

  const roleOptions = roles.map((r) => ({ value: r, label: r }));

  function getFlag(code) {
    return code
      .toUpperCase()
      .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt()));
  }

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: "12px",
      padding: "4px",
      borderColor: state.isFocused ? "#1B3A5C" : "#e5e7eb",
      minHeight: "52px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(27,58,92,0.2)" : "none",
      "&:hover": { borderColor: "#1B3A5C" },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#1B3A5C" : state.isFocused ? "#f0f4f8" : "white",
      color: state.isSelected ? "white" : "#374151",
    }),
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "ll-staffing-cvs");

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
      formData
    );

    // Transform URL to make PDF viewable in browser
    const url = res.data.secure_url.replace(
      "/raw/upload/",
      "/image/upload/"
    ).replace(".pdf", ".pdf");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!country) { setError("Please select your country"); return; }
    if (!role) { setError("Please select the role you are applying for"); return; }
    if (!cvFile) { setError("Please upload your CV"); return; }

    setSubmitting(true);

    try {
      // 1. Upload CV to Cloudinary
      const cvUrl = await uploadToCloudinary(cvFile);

      // 2. Get form values
      const form = formRef.current;
      const applicationData = {
        name: form.name_field.value,
        email: form.email.value,
        phone: form.phone.value,
        country: country.value,
        role: role.value,
        experience: form.experience.value,
        availability: form.availability.value,
        coverLetter: form.coverLetter.value,
        cvUrl,
        cvFileName: cvFile.name,
        submittedAt: new Date().toISOString(),
        status: "Pending",
      };

      // 3. Save to MongoDB via backend
      await axios.post(APPLICATIONS_API, applicationData);

      setSubmitted(true);
    } catch (err) {
      console.error("Application error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loader />;

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-lg mx-auto">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-[#1B3A5C]">Application Submitted!</h2>
            <p className="text-gray-600 mt-4 leading-8">
              Thank you for applying to LL Staffing Solutions.
              Our team will review your application and get back to you within 24-48 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <button className="bg-[#1B3A5C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2A9D8F] transition">
                  View More Jobs
                </button>
              </Link>
              <Link to="/">
                <button className="bg-white border-2 border-[#1B3A5C] text-[#1B3A5C] px-8 py-3 rounded-xl font-semibold hover:bg-[#1B3A5C] hover:text-white transition">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0F3355] py-24 px-6 text-center relative overflow-hidden mt-[50px]">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #17B7F5 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, #2A9D8F 0%, transparent 40%)`
          }}
        />
        <div className="relative z-10">
          <span className="inline-block text-[#17B7F5] text-sm font-semibold uppercase tracking-widest mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Start Your Career in<br />
            <span className="text-[#17B7F5]">Healthcare Today</span>
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8 text-sm">
            Join LL Staffing Solutions and make a real difference in people's lives.
            We are always looking for compassionate, certified professionals to join our growing team.
          </p>
          <p className="text-white/60 mt-4 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span className="mx-2 text-[#17B7F5]">/</span>
            <Link to="/jobs" className="hover:text-white transition">Jobs</Link>
            <span className="mx-2 text-[#17B7F5]">/</span>
            <span className="text-white">Apply</span>
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "Competitive Pay", desc: "We offer fair and competitive compensation for all our healthcare professionals." },
            { icon: Clock, title: "Flexible Hours", desc: "Full-time, part-time, and per diem options available to fit your lifestyle." },
            { icon: MapPin, title: "Randolph, MA", desc: "Based at 91 Mill Street, Suite 1 serving surrounding Massachusetts communities." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-[#1B3A5C]" />
              </div>
              <h4 className="font-bold text-[#1B3A5C]">{title}</h4>
              <p className="text-gray-500 text-sm mt-2 leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="space-y-8">
          <img
            src={applyImage}
            alt="Apply"
            className="w-full rounded-md shadow-2xl object-cover max-h-[450px]"
          />

          <div className="bg-[#0F3355] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
            <div className="space-y-5">
              {[
                { step: "01", title: "Application Review", desc: "Our team reviews your application within 24-48 hours." },
                { step: "02", title: "Initial Screening", desc: "We will reach out to schedule a quick phone screening." },
                { step: "03", title: "Interview", desc: "A formal interview with our hiring team." },
                { step: "04", title: "Onboarding", desc: "Welcome to the team! We guide you through the onboarding process." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#17B7F5] flex items-center justify-center text-xs font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.title}</h4>
                    <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2A9D8F]/10 border border-[#2A9D8F]/20 rounded-2xl p-6">
            <h4 className="font-bold text-[#1B3A5C] mb-2">Looking for a specific role?</h4>
            <p className="text-gray-600 text-sm mb-4">Browse our open positions and apply directly from the job listing.</p>
            <Link to="/jobs" className="flex items-center gap-2 text-[#2A9D8F] font-semibold text-sm hover:opacity-70 transition">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1B3A5C] mb-2">Career Application Form</h2>
          <p className="text-gray-500 text-sm mb-8">
            Fill in your details below. All fields marked * are required.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

            {/* FULL NAME */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  required
                  name="name_field"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  required
                  name="phone"
                  type="tel"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            {/* COUNTRY */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Country <span className="text-red-500">*</span>
              </label>
              <Select
                options={countries}
                value={country}
                onChange={setCountry}
                styles={selectStyles}
                placeholder="Select your country"
                isSearchable
              />
            </div>

            {/* ROLE */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Role Applying For <span className="text-red-500">*</span>
              </label>
              <Select
                options={roleOptions}
                value={role}
                onChange={setRole}
                styles={selectStyles}
                placeholder="Select a role"
                isSearchable
              />
            </div>

            {/* EXPERIENCE */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="experience"
                className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm text-gray-500"
              >
                <option value="">Select experience level</option>
                {experienceLevels.map((e) => (
                  <option key={e}>{e}</option>
                ))}
              </select>
            </div>

            {/* AVAILABILITY */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Availability <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="availability"
                className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm text-gray-500"
              >
                <option value="">Select availability</option>
                {availabilities.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>

            {/* CV UPLOAD */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Upload CV / Resume <span className="text-red-500">*</span>
              </label>
              <label className="w-full border-2 border-dashed border-gray-200 rounded-xl px-4 py-5 flex flex-col items-center justify-center cursor-pointer hover:border-[#1B3A5C] transition group">
                {cvName ? (
                  <FileText className="w-6 h-6 text-[#2A9D8F] mb-2" />
                ) : (
                  <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#1B3A5C] transition mb-2" />
                )}
                <span className={`text-sm transition ${cvName ? "text-[#2A9D8F] font-semibold" : "text-gray-500 group-hover:text-[#1B3A5C]"}`}>
                  {cvName || "Click to upload CV or Resume (PDF, DOC, DOCX)"}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setCvFile(file);
                      setCvName(file.name);
                    }
                  }}
                />
              </label>
            </div>

            {/* COVER LETTER */}
            <div>
              <label className="text-[#1B3A5C] font-semibold text-sm mb-1 block">
                Cover Letter <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <textarea
                name="coverLetter"
                rows={4}
                placeholder="Tell us why you want to join LL Staffing Solutions and what makes you a great fit..."
                className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]/20 focus:border-[#1B3A5C] text-sm resize-none"
              />
            </div>

            {/* ERROR */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                ❌ {error}
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#1B3A5C] text-white py-4 rounded-xl font-bold hover:bg-[#2A9D8F] transition text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? "Submitting Application..." : (
                <>Submit Application <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            <p className="text-center text-gray-400 text-xs">
              By submitting this form you agree to our privacy policy.
              Your information is safe with us.
            </p>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Apply;