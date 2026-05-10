import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
                <div className="text-center max-w-lg mx-auto">

                    {/* 404 Number */}
                    <h1 className="text-[150px] font-bold text-[#1B3A5C]/10 leading-none select-none">
                        404
                    </h1>

                    {/* Icon */}
                    <div className="w-20 h-20 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center mx-auto -mt-8 mb-6">
                        <span className="text-4xl">🔍</span>
                    </div>

                    <h2 className="text-3xl font-bold text-[#1B3A5C]">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 mt-4 leading-8">
                        Oops! The page you are looking for doesn't exist or has been moved.
                        Let us help you get back on track.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <button className="bg-[#1B3A5C] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#2A9D8F] transition w-full sm:w-auto">
                                Back to Home
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="bg-white border-2 border-[#1B3A5C] text-[#1B3A5C] px-8 py-3 rounded-xl font-semibold hover:bg-[#1B3A5C] hover:text-white transition w-full sm:w-auto">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12">
                        <p className="text-gray-400 text-sm mb-4">Or visit one of these pages:</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { label: "About Us", to: "/about" },
                                { label: "Our Services", to: "/services" },
                                { label: "Jobs", to: "/jobs" },
                                { label: "Apply Now", to: "/apply" },
                            ].map(({ label, to }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#1B3A5C] hover:text-[#1B3A5C] transition"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound