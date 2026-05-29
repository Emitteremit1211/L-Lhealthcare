import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
} from "react-icons/fa"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
]

const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/services", label: "Our Services" },
    { to: "/jobs", label: "Jobs" },
    { to: "/contact", label: "Contact Us" },
    { to: "/appointment", label: "Book Appointment" },
    { to: "/apply", label: "Apply Now" },
]

const services = [
    "Home Health Aide (HHA)",
    "Adult Care Services (ACS)",
    "Certified Nursing Assistant (CNA)",
    "Registered Nurse Services (RN)",
    "Personal Care Assistant (PCA)",
    "Transportation Services",
]

const legalLinks = [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/Terms", label: "Terms & Conditions" },
    { to: "/cookies", label: "Cookie Policy" },
    { to: "/data", label: "Data Protection" },
    { to: "/disclaimer", label: "Website Disclaimer" },
]

const Footer = () => {
    return (
        <footer className="bg-[#0F3655] text-white relative overflow-hidden">

            {/* Decorative top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-[#17B7F5] via-[#2A9D8F] to-[#17B7F5]" />

            {/* Top CTA strip */}
            <div className="bg-[#0B2540] border-b border-white/10">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="text-white font-semibold text-base">Need care for a loved one?</p>
                        <p className="text-white/50 text-sm mt-0.5">Our team is available 24/7 to help you find the right care solution.</p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                        <Link to="/appointment" className="bg-[#17B7F5] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0ea5d8] transition">
                            Book Appointment
                        </Link>
                        <Link to="/contact" className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white/20 transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main footer body */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1 — Brand */}
                    <div className="lg:col-span-1">
                        <h2 className="text-lg font-bold uppercase tracking-wider mb-2 text-white">
                            L&L Staffing Solution
                        </h2>
                        <div className="w-10 h-0.5 bg-[#17B7F5] mb-5" />
                        <p className="text-white/60 text-sm leading-7 mb-8">
                            A Massachusetts-based licensed and registered LLC providing compassionate, professional in-home care and skilled healthcare staffing services.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">

                                {/* Icon */}
                                <div className="w-8 h-8 rounded-lg bg-[#17B7F5]/10 flex items-center justify-center flex-shrink-0">
                                    <FaPhoneAlt className="text-[#17B7F5] text-xs" />
                                </div>

                                {/* Texts */}
                                <div className="flex flex-col">
                                    <p className="text-white/40 text-xs">Phone</p>

                                    <a
                                        href="tel:+19761697388"
                                        className="text-white/80 text-sm hover:text-[#17B7F5] transition"
                                    >
                                        978-552-9703
                                    </a>

                                    <a
                                        href="tel:+16176973888"
                                        className="text-white/80 text-sm hover:text-[#17B7F5] transition"
                                    >
                                        1-617-697-3888
                                    </a>
                                </div>
                            </div>

                            <a href="mailto:info@llstaffingsolution.com" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-[#17B7F5]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#17B7F5]/20 transition">
                                    <FaEnvelope className="text-[#17B7F5] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Email</p>
                                    <p className="text-white/80 text-sm group-hover:text-[#17B7F5] transition">info@llstaffingsolution.com</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#17B7F5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaMapMarkerAlt className="text-[#17B7F5] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Address</p>
                                    <p className="text-white/80 text-sm leading-6">91 Mill Street, Suite 1<br />Randolph, MA 02368</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#17B7F5]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaClock className="text-[#17B7F5] text-xs" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs">Hours</p>
                                    <p className="text-white/80 text-sm leading-6">24/7 Care Available<br />Mon – Fri: 9:00 AM – 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Quick Links</h3>
                        <div className="w-8 h-0.5 bg-[#2A9D8F] mb-6" />
                        <ul className="space-y-3">
                            {quickLinks.map(({ to, label }) => (
                                <li key={label}>
                                    <Link
                                        to={to}
                                        className="text-white/55 text-sm hover:text-[#17B7F5] transition flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#17B7F5]/40 group-hover:bg-[#17B7F5] transition flex-shrink-0" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Services */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Our Services</h3>
                        <div className="w-8 h-0.5 bg-[#2A9D8F] mb-6" />
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s}>
                                    <Link
                                        to="/services"
                                        className="text-white/55 text-sm hover:text-[#17B7F5] transition flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#17B7F5]/40 group-hover:bg-[#17B7F5] transition flex-shrink-0" />
                                        {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Social + Licensed */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">Follow Us</h3>
                        <div className="w-8 h-0.5 bg-[#2A9D8F] mb-6" />

                        <div className="flex gap-3 flex-wrap mb-10">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <button
                                    key={label}
                                    onClick={() => window.open(href, "_blank")}
                                    title={label}
                                    style={{ backgroundColor: color }}
                                    className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl text-white hover:opacity-80 hover:scale-105 transition-all"
                                >
                                    <Icon size={16} />
                                </button>
                            ))}
                        </div>

                        {/* Licensed badge */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                            <p className="text-[#17B7F5] text-xs font-bold uppercase tracking-widest mb-2">Licensed & Registered</p>
                            <p className="text-white/60 text-xs leading-5">
                                L&L Staffing Solution LLC is officially registered with the Commonwealth of Massachusetts, Corporations Division.
                            </p>
                            <div className="mt-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#2A9D8F] flex-shrink-0" />
                                <span className="text-white/40 text-xs">Massachusetts LLC · 2025</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">

                    {/* Legal links */}
                    <div className="flex flex-wrap gap-2 mb-5 justify-center">
                        {legalLinks.map(({ to, label }) => (
                            <Link
                                key={label}
                                to={to}
                                className="text-xs text-white/35 hover:text-white border border-white/10 hover:border-white/25 px-3 py-1.5 rounded-full transition-all duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Copyright row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
                        <p>
                            Copyright © {new Date().getFullYear()}{" "}
                            <span className="text-white/50 font-semibold">L&L Staffing Solution LLC</span>. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <p>
                                Designed & Developed by{" "}
                                <a
                                    href="https://personal-portfolio-rho-three-54.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 font-semibold hover:text-[#17B7F5] transition"
                                >
                                    Temitope
                                </a>
                            </p>
                            <Link to="/adminlogin" className="text-white/15 hover:text-white/40 transition">
                                Admin
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer