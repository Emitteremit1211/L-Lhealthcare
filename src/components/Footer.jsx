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

const Footer = () => {
    return (
        <footer className="bg-[#1B3A5C] text-white px-10 md:px-16 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Column 1 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">
                        L&L STAFFING SOLUTIONS
                    </h2>

                    <p className="text-md leading-9 text-white/95 mb-8 max-w-sm">
                        L&L Staffing Solutions provides compassionate, professional in-home care
                        and skilled nursing services designed to support comfort, dignity,
                        and independence.
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-[#17B7F5] text-2xl flex-shrink-0" />
                            <span className="text-xl">978-552-9703</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-[#17B7F5] text-2xl flex-shrink-0" />
                            <span className="text-sm">info@llstaffingsolution.com</span>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">QUICK LINKS</h2>

                    <div className="flex flex-col gap-5 text-md">
                        <Link to="/" className="hover:text-[#17B7F5] transition">Home</Link>
                        <Link to="/aboutus" className="hover:text-[#17B7F5] transition">About Us</Link>
                        <Link to="/services" className="hover:text-[#17B7F5] transition">Our Services</Link>
                        <Link to="/jobs" className="hover:text-[#17B7F5] transition">Jobs</Link>
                        <Link to="/contact" className="hover:text-[#17B7F5] transition">Contact Us</Link>
                        <Link to="/appointment" className="hover:text-[#17B7F5] transition">Book Appointment</Link>
                        <Link to="/apply" className="hover:text-[#17B7F5] transition">Apply Now</Link>
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">SERVICES</h2>

                    <div className="flex flex-col gap-5 text-md">
                        <p>Home Health Aide (HHA)</p>
                        <p>Adult Care Services (ACS)</p>
                        <p>Certified Nursing Assistant (CNA)</p>
                        <p>Registered Nurse Services (RN)</p>
                        <p>Personal Care Assistant (PCA)</p>
                        <p>Transportation Services</p>
                    </div>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">VISIT US</h2>

                    <div className="space-y-7">
                        <div className="flex gap-4 items-start">
                            <FaMapMarkerAlt className="text-[#17B7F5] text-2xl mt-1 flex-shrink-0" />
                            <p className="text-md">
                                91 Mill Street, Suite 1, Randolph, MA 02368
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaClock className="text-[#17B7F5] text-2xl mt-1 flex-shrink-0" />
                            <p className="text-md">
                                24/7 Care Available <br />
                                Monday – Friday: 9:00 AM – 5:00 PM
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold uppercase mt-10 mb-5">
                        SOCIAL PROFILES
                    </h3>

                    <div className="flex gap-3 flex-wrap">
                        {socialLinks.map(({ icon: Icon, href, label, color }) => (
                            <button
                                key={label}
                                onClick={() => window.open(href, "_blank")}
                                title={label}
                                style={{ backgroundColor: color }}
                                className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full text-white hover:opacity-80 transition"
                            >
                                <Icon size={18} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Admin hidden link */}
            <Link
                to="/adminlogin"
                className="text-white/20 hover:text-white/60 text-xs transition mt-8 inline-block"
            >
                Admin
            </Link>

            {/* Legal Links + Copyright */}
            <div className="border-t border-white/20 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-white/90">
                    Copyright © {new Date().getFullYear()}{" "}
                    <span className="font-semibold">LL STAFFING SOLUTIONS</span>. All rights reserved.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {[
                        { to: "/privacy", label: "Privacy Policy" },
                        { to: "/Terms", label: "Terms & Conditions" },
                        { to: "/cookies", label: "Cookie Policy" },
                        { to: "/data", label: "Data Protection" },
                        { to: "/disclaimer", label: "Website Disclaimer" },
                    ].map(({ to, label }) => (
                        <Link
                            key={label}
                            to={to}
                            className="text-xs text-white/50 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full transition-all duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

            </div>
            <div className="mt-[20px]">

                <p className="text-sm text-white">
                    Designed & Developed by{" "}
                    <a
                        href="https://personal-portfolio-rho-three-54.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-blue-400 transition"
                    >
                        Temitope
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer