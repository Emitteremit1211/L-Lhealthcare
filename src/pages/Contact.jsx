import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageSquare,
} from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
]

const contactCards = [
    {
        icon: Phone,
        title: "Call Us Anytime",
        sub: "24/7 Support Available",
        value: "978-552-9703",
        href: "tel:+19785529703",
        color: "#1B3A5C",
    },
    {
        icon: Mail,
        title: "Email Us",
        sub: "We reply within 24 hours",
        value: "info@llhealthcare.com",
        href: "mailto:info@llhealthcare.com",
        color: "#2A9D8F",
    },
    {
        icon: MapPin,
        title: "Visit Our Office",
        sub: "91 Mill Street, Suite 1",
        value: "Randolph, MA 02368",
        href: "https://www.google.com/maps/search/?api=1&query=91+Mill+Street+Suite+1+Randolph+MA+02368",
        color: "#17B7F5",
    },
    {
        icon: Clock,
        title: "Working Hours",
        sub: "Monday – Friday: 9AM – 5PM",
        value: "24/7 Care Available",
        href: null,
        color: "#0F3355",
    },
]

const Contact = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="bg-[#0F3355] py-28 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, #17B7F5 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, #2A9D8F 0%, transparent 40%)`
                    }}
                />
                <div className="relative z-10">
                    <span className="inline-block text-[#17B7F5] text-sm font-semibold uppercase tracking-widest mb-4">
                        Contact Us
                    </span>
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        We Are Here<br />
                        <span className="text-[#17B7F5]">For You 24/7</span>
                    </h1>
                    <p className="text-white/70 mt-6 max-w-xl mx-auto leading-8 text-sm">
                        Whether you need immediate care assistance, have questions about our services,
                        or want to schedule a consultation our team is always ready to help.
                    </p>
                    <p className="text-white/60 mt-3 text-sm">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <span className="mx-2 text-[#17B7F5]">/</span>
                        <span className="text-white">Contact</span>
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactCards.map(({ icon: Icon, title, sub, value, href, color }) => (
                        <div
                            key={title}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition text-center"
                        >
                            <div
                                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: `${color}15` }}
                            >
                                <Icon className="w-6 h-6" style={{ color }} />
                            </div>
                            <h4 className="font-bold text-[#1B3A5C] text-sm">{title}</h4>
                            <p className="text-gray-500 text-xs mt-1">{sub}</p>
                            {href ? (
                                React.createElement("a", {
                                    href,
                                    target: href.startsWith("http") ? "_blank" : "_self",
                                    rel: "noopener noreferrer",
                                    className: "text-sm font-semibold mt-2 block hover:opacity-70 transition",
                                    style: { color }
                                }, value)
                            ) : (
                                <p className="text-sm font-semibold mt-2" style={{ color }}>{value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT INFO + FORM */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                    <span className="text-[#2A9D8F] text-sm font-semibold uppercase tracking-widest">Reach Out</span>
                    <h2 className="text-3xl font-bold text-[#1B3A5C] mt-2">
                        Get In Touch With Us
                    </h2>
                    <p className="text-gray-600 mt-4 leading-8">
                        We are always ready to support you and your loved ones with
                        professional home care services. Reach out to us for consultations,
                        service inquiries, or immediate assistance.
                    </p>

                    {/* CONTACT DETAILS */}
                    <div className="mt-8 space-y-5">

                        {React.createElement("a", {
                            href: "tel:+19785529703",
                            className: "flex items-start gap-4 group"
                        },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0 group-hover:bg-[#1B3A5C] transition" },
                                React.createElement(Phone, { className: "w-5 h-5 text-[#1B3A5C] group-hover:text-white transition" })
                            ),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-[#1B3A5C]" }, "Phone"),
                                React.createElement("p", { className: "text-gray-600" }, "978-552-9703"),
                                React.createElement("p", { className: "text-gray-500 text-sm" }, "24/7 Available")
                            )
                        )}

                        {React.createElement("a", {
                            href: "mailto:info@llhealthcare.com",
                            className: "flex items-start gap-4 group"
                        },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0 group-hover:bg-[#2A9D8F] transition" },
                                React.createElement(Mail, { className: "w-5 h-5 text-[#1B3A5C] group-hover:text-white transition" })
                            ),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-[#1B3A5C]" }, "Email"),
                                React.createElement("p", { className: "text-gray-600" }, "info@llhealthcare.com"),
                                React.createElement("p", { className: "text-gray-500 text-sm" }, "We reply within 24 hours")
                            )
                        )}

                        {React.createElement("a", {
                            href: "https://www.google.com/maps/search/?api=1&query=91+Mill+Street+Suite+1+Randolph+MA+02368",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-start gap-4 group"
                        },
                            React.createElement("div", { className: "w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0 group-hover:bg-[#17B7F5] transition" },
                                React.createElement(MapPin, { className: "w-5 h-5 text-[#1B3A5C] group-hover:text-white transition" })
                            ),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-semibold text-[#1B3A5C]" }, "Location"),
                                React.createElement("p", { className: "text-gray-600" }, "91 Mill Street, Suite 1"),
                                React.createElement("p", { className: "text-gray-600" }, "Randolph, MA 02368")
                            )
                        )}

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0">
                                <Clock className="w-5 h-5 text-[#1B3A5C]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1B3A5C]">Working Hours</h4>
                                <p className="text-gray-600">Monday – Friday: 9:00 AM – 5:00 PM</p>
                                <p className="text-gray-500 text-sm">24/7 Care Available</p>
                            </div>
                        </div>

                    </div>

                    {/* SOCIAL MEDIA */}
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
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="mt-10 bg-[#0F3355] rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <MessageSquare className="w-5 h-5 text-[#17B7F5]" />
                            <h4 className="font-bold text-white">Need Immediate Help?</h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-7 mb-5">
                            For urgent care needs, call us directly at any time of day or night.
                            Our team is always on standby to assist you and your family.
                        </p>
                        {React.createElement("a", {
                            href: "tel:+19785529703",
                            className: "flex items-center justify-center gap-2 bg-[#17B7F5] text-white w-full py-3 rounded-xl font-semibold text-sm hover:bg-[#0ea5d8] transition"
                        },
                            React.createElement(Phone, { className: "w-4 h-4" }),
                            "Call Now: 978-552-9703"
                        )}
                    </div>

                </div>

                {/* RIGHT FORM */}
                <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#1B3A5C] mb-2">
                        Send Us a Message
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                        Fill out the form below and we will get back to you as soon as possible.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                        />
                        <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3A5C] text-gray-500">
                            <option value="">Select Service</option>
                            <option>Home Health Aide Services</option>
                            <option>Attendant Care Services</option>
                            <option>Certified Nursing Assistant Services</option>
                            <option>Registered Nurse Services</option>
                            <option>Personal Care & Transportation</option>
                            <option>Limousine Services</option>
                            <option>Mental Health Services</option>
                            <option>Home Care Program Services</option>
                            <option>None Of The Above</option>
                        </select>
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B3A5C]"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-[#1B3A5C] text-white py-3 rounded-lg hover:bg-[#2A9D8F] transition font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </section>

            {/* MAP SECTION */}
            <section className="w-full">
                <div className="bg-[#1B3A5C] py-8 px-6 text-center">
                    <h3 className="text-white font-bold text-xl">Find Us On The Map</h3>
                    <p className="text-white/60 text-sm mt-1">91 Mill Street, Suite 1, Randolph, MA 02368</p>
                </div>
                <iframe
                    title="L&amp;L Healthcare Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.0!2d-71.0476!3d42.1654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s91+Mill+St%2C+Randolph%2C+MA+02368!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                />
            </section>

            <Footer />
        </>
    )
}

export default Contact