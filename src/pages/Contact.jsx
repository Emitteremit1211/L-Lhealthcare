import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"
import { Link } from "react-router-dom"

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

            {/* HERO SECTION */}
            <section className="bg-[#0F3655] py-24 px-6 text-center">
                <h1 className="text-white text-4xl md:text-5xl font-bold">
                    Contact Us
                </h1>
                <p className="text-white/80 mt-4">
                   <Link to='/' className="text-white/60 hover:text-white">Home</Link> / Contact
                </p>
            </section>

            {/* CONTACT SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

                {/* LEFT INFO */}
                <div>
                    <h2 className="text-3xl font-bold text-[#0F3655]">
                        Get In Touch With Us
                    </h2>

                    <p className="text-gray-600 mt-4 leading-8">
                        We are always ready to support you and your loved ones with
                        professional home care services. Reach out to us for consultations,
                        service inquiries, or immediate assistance.
                    </p>

                    <div className="mt-8 space-y-6">

                        <div>
                            <h4 className="font-semibold text-[#0F3655]">Phone</h4>
                            <p className="text-gray-600">978-552-9703 (24/7 Available)</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-[#0F3655]">Email</h4>
                            <p className="text-gray-600">support@llhealthcare.com</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-[#0F3655]">Location</h4>
                            <p className="text-gray-600">
                                United States (Home Care Services Nationwide)
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">

                    <h3 className="text-2xl font-bold text-[#0F3655] mb-6">
                        Send Us a Message
                    </h3>

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17B7F5]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17B7F5]"
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17B7F5]"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17B7F5]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#0F3655] text-white py-3 rounded-lg hover:bg-[#17B7F5] transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Contact