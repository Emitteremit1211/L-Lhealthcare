import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    // FaFacebookF,
    // FaInstagram,

    // FaLinkedinIn,
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
                        L&L HEALTHCARE
                    </h2>

                    <p className="text-md leading-9 text-white/95 mb-8 max-w-sm">
                        L&L Healthcare provides compassionate, professional in-home care
                        and skilled nursing services designed to support comfort, dignity,
                        and independence.
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-[#17B7F5] text-2xl" />
                            <span className="text-xl">978-552-9703</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-[#17B7F5] text-2xl" />
                            <span className="text-xl">info@llhealthcare.com</span>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">QUICK LINKS</h2>

                    <div className="flex flex-col gap-5 text-md">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Our Services</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>

                {/* Column 3 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">SERVICES</h2>

                    <div className="flex flex-col gap-5 text-md">
                        <p>Certified Nursing Assistant Services (CNA)</p>
                        <p>Home Health Aide Services(HHA)</p>
                        <p>Limousine Services</p>
                        <p>Home Care Program Services</p>
                        <p>Personal Care & Transportation Services</p>
                        <p>Providing Mental Health services</p>
                    </div>
                </div>

                {/* Column 4 */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-6">VISIT US</h2>

                    <div className="space-y-7">
                        <div className="flex gap-4 items-start">
                            <FaMapMarkerAlt className="text-[#17B7F5] text-2xl mt-1" />
                            <p className="text-md">
                                911 Mill Street,Randolp, MA 02368
                            </p>
                        </div>

                        <div className="flex gap-4 items-start">
                            <FaClock className="text-[#17B7F5] text-2xl mt-1" />
                            <p className="text-md">
                                24/7 Care Available <br />
                                Monday – Friday: 9:00 AM – 5:00 PM
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold uppercase mt-10 mb-5">
                        SOCIAL PROFILES
                    </h3>

                    <div className="mt-10">
                        <h4 className="font-semibold text-[#1B3A5C] mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <button
                                    key={label}
                                    onClick={() => window.open(href, "_blank")}
                                    title={label}
                                    style={{ backgroundColor: color }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:opacity-80 transition"
                                >
                                    <Icon className="w-7 h-7" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/adminLogin'} className="hover:bg-teal-300 p-2 rounded-lg hover:text-blue-500">Admin</Link>
            {/* Bottom copyright bar */}
            <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/90">
                <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <span className="font-semibold">L&LHEALTHCARE</span>. All rights reserved.
                </p>

                <p className="text-sm text-white">
                    Designed & Developed by{" "}
                    <a
                        href="https://personal-portfolio-rho-three-54.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-white hover:text-blue-600 transition"
                    >
                        Temitope
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer