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
} from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "#E1306C" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
]

const Contact = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <Navbar />

            {/* HERO */}
            <section className="bg-[#1B3A5C] py-24 px-6 text-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Contact Us
                </h1>
                <p className="text-white/80 mt-4">
                    <Link to="/" className="text-white/60 hover:text-white">Home</Link> / Contact
                </p>
            </section>

            {/* WHY CONTACT US BANNER */}
            <section className="bg-gray-50 py-12 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C]">
                        We Are Here For You
                    </h2>
                    <p className="text-gray-600 mt-4 leading-8">
                        Whether you need immediate care assistance, have questions about our services,
                        or want to schedule a consultation, our team is available 24/7 to help you
                        and your loved ones get the support you deserve.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <Phone className="w-8 h-8 text-[#1B3A5C] mx-auto" />
                            <h4 className="font-semibold text-[#1B3A5C] mt-3">Call Us Anytime</h4>
                            <p className="text-gray-500 text-sm mt-1">24/7 Support Available</p>
                            <p className="text-sm text-gray-500 hover:text-blue-500">978-552-9703</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <Mail className="w-8 h-8 text-[#1B3A5C] mx-auto" />
                            <h4 className="font-semibold text-[#1B3A5C] mt-3">Email Us</h4>
                            <p className="text-gray-500 text-sm mt-1">We reply within 24 hours</p>
                            <p className="text-sm text-gray-500 hover:text-blue-500">info@llhealthcare.com</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <MapPin className="w-8 h-8 text-[#1B3A5C] mx-auto" />
                            <h4 className="font-semibold text-[#1B3A5C] mt-3">Visit Our Office</h4>
                            <p className="text-gray-500 text-sm mt-1">91 Mill Street, Suite 1 Randolph, MA 02368</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT INFO + FORM */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div>
                    <h2 className="text-3xl font-bold text-[#1B3A5C]">
                        Get In Touch With Us
                    </h2>

                    <p className="text-gray-600 mt-4 leading-8">
                        We are always ready to support you and your loved ones with
                        professional home care services. Reach out to us for consultations,
                        service inquiries, or immediate assistance.
                    </p>

                    {/* CONTACT DETAILS */}
                    <div className="mt-8 space-y-6">

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0">
                                <Phone className="w-5 h-5 text-[#1B3A5C]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1B3A5C]">Phone</h4>
                                <p className="text-gray-600">978-552-9703</p>
                                <p className="text-gray-500 text-sm">24/7 Available</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0">
                                <Mail className="w-5 h-5 text-[#1B3A5C]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1B3A5C]">Email</h4>
                                <p className="text-gray-600">info@llhealthcare.com</p>
                                <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0">
                                <MapPin className="w-5 h-5 text-[#1B3A5C]" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-[#1B3A5C]">Location</h4>
                                <p className="text-gray-600">91 Mill Street, Suite 1</p>
                                <p className="text-gray-600">Randolph, MA 02368</p>
                            </div>
                        </div>

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
                                    <Icon className="w-7 h-7" />
                                </button>
                            ))}
                        </div>
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
            <section className="w-full h-[400px]">
                <iframe
                    title="L&amp;L Healthcare Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.0!2d-71.0476!3d42.1654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s91+Mill+St%2C+Randolph%2C+MA+02368!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
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