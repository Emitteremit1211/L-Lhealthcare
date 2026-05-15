import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Loader from "../components/Loader"

import {
    HeartHandshake,
    UserCheck,
    BriefcaseMedical,
    Stethoscope,
    Car,
    CarFront,
    Brain,
    Home,
    ArrowRight,
    // Loader,
} from "lucide-react"
import servicesImg from "../assets/service.jpg"
import { Link } from "react-router-dom"

const services = [
    {
        title: "HHA Services",
        desc: "Our Home Health Aides provide hands-on assistance with everyday activities such as bathing, dressing, grooming, and mobility. We focus on maintaining dignity while ensuring clients feel comfortable, safe, and supported in their own homes.",
        icon: HeartHandshake,
    },
    {
        title: "AC Services",
        desc: "Our Attendant Care Services offer dependable companionship and supervision. Whether it's engaging in conversation, light activities, or simply being present, we help reduce isolation and create a sense of comfort and connection.",
        icon: UserCheck,
    },
    {
        title: "CNA Services",
        desc: "Certified Nursing Assistants deliver essential care including hygiene support, mobility assistance, and vital monitoring. Our CNAs work closely with clients to ensure daily needs are met with professionalism and compassion.",
        icon: BriefcaseMedical,
    },
    {
        title: "RN Services",
        desc: "Our Registered Nurses provide skilled medical care at home, including medication management, health assessments, and treatment support. We bring clinical expertise directly to you, ensuring high-quality care without leaving home.",
        icon: Stethoscope,
    },
    {
        title: "Personal Care & Transportation",
        desc: "We assist with personal routines and provide reliable transportation to medical appointments, errands, and social visits. Our goal is to help clients maintain independence while staying active and connected to their community.",
        icon: Car,
    },
    {
        title: "Providing Mental Health Services",
        desc: "Our mental health support services are designed to promote emotional well-being and psychological stability. We connect clients with compassionate professionals who provide counseling, crisis support, and ongoing mental wellness care.",
        icon: Brain,
    },
    {
        title: "Home Care Program Services",
        desc: "Our comprehensive Home Care Program offers structured, long-term support tailored to each client's evolving needs. From routine check-ins to full-time assistance, we ensure continuity of care that promotes independence and quality of life.",
        icon: Home,
    },
]


const Services = () => {
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

            <section className="pt-20">
                {/* Hero Section */}
                <div className="bg-[#0F3655] py-24 px-6 text-center relative overflow-hidden">

                    {/* Small top text */}
                    <p className="text-[#17B7F5] uppercase tracking-[4px] text-sm font-semibold mb-4">
                        Compassion • Professionalism • Reliable Care
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Our Healthcare <br /> Services
                    </h1>

                    {/* Description */}
                    <p className="text-white/80 text-sm md:text-lg max-w-3xl mx-auto leading-8">
                        At L&L Staffing Solution, we are committed to delivering
                        compassionate, high-quality, and dependable care services tailored to
                        meet the unique needs of every individual and family we serve.
                        Our experienced caregivers and healthcare professionals ensure comfort,
                        dignity, and support right in the comfort of your home.
                    </p>

                    {/* Breadcrumb */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm">
                        <Link to="/" className="hover:text-white text-white/60">Home</Link>

                        <span className="text-[#17B7F5]">/</span>

                        <span className="text-white font-semibold">Our Services</span>
                    </div>

                    {/* Bottom Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-5xl mx-auto">

                        <div className="bg-white/10 backdrop-blur-md rounded-xl py-5 px-4 border border-white/10">
                            <h2 className="text-white text-3xl font-bold">24/7</h2>
                            <p className="text-white/70 text-sm mt-1">Care Support</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl py-5 px-4 border border-white/10">
                            <h2 className="text-white text-3xl font-bold">100%</h2>
                            <p className="text-white/70 text-sm mt-1">Client Focused</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl py-5 px-4 border border-white/10">
                            <h2 className="text-white text-3xl font-bold">Skilled</h2>
                            <p className="text-white/70 text-sm mt-1">Professionals</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl py-5 px-4 border border-white/10">
                            <h2 className="text-white text-3xl font-bold">Trusted</h2>
                            <p className="text-white/70 text-sm mt-1">Healthcare Team</p>
                        </div>

                    </div>
                </div>

                {/* Intro */}
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F3655] mb-5">
                        Personalized In-Home Care Services You Can Rely On
                    </h2>

                    <p className="text-gray-600 max-w-4xl mx-auto leading-8">
                        Whether your loved one requires skilled medical support, daily
                        personal care, or compassionate companionship, our certified
                        caregivers deliver reliable, respectful, and personalized care all
                        within the comfort of home.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="max-w-7xl mx-auto px-6 pb-20">

                    {/* First 6 Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.slice(0, 6).map((service, index) => {
                            const Icon = service.icon

                            return (
                                <div
                                    key={index}
                                    className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 w-full flex flex-col justify-between group border border-gray-100"
                                >
                                    <div>
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-8 h-8 text-[#1B3A5C]" />
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-[#0F3655] leading-snug">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-gray-600 text-sm leading-8">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-10 flex justify-end">
                                        <div className="w-12 h-12 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:bg-[#17B7F5] transition duration-300">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition duration-300" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Last 2 Cards */}
                    <div className="flex justify-center gap-10 flex-wrap mt-10">
                        {services.slice(6).map((service, index) => {
                            const Icon = service.icon

                            return (
                                <div
                                    key={index}
                                    className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 w-full max-w-sm flex flex-col justify-between group border border-gray-100"
                                >
                                    <div>
                                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-8 h-8 text-[#1B3A5C]" />
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-[#0F3655] leading-snug">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 text-gray-600 text-sm leading-8">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-10 flex justify-end">
                                        <div className="w-12 h-12 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:bg-[#17B7F5] transition duration-300">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition duration-300" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">

                {/* Left Image (Sharpened Premium Look) */}
                <div className="relative">
                    <div className="absolute -inset-2 bg-[#17B7F5]/20 blur-2xl rounded-3xl"></div>

                    <img
                        src={servicesImg}
                        alt="Home Care Support"
                        className="relative w-full h-full object-cover rounded-xl shadow-2xl border border-gray-100"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F3655] leading-snug">
                        Compassionate Care That Prioritizes Your Comfort, Safety, and Independence
                    </h2>

                    <p className="text-gray-600 mt-5 leading-8">
                        We deliver high-quality, personalized in-home care services designed to support individuals
                        through every stage of life whether recovering from illness, managing chronic conditions,
                        or needing daily assistance.
                    </p>

                    <p className="text-gray-600 mt-4 leading-8">
                        Our mission at L&L Staffing Solution is to ensure every client receives
                        respectful, reliable, and compassionate care that promotes dignity and emotional well-being
                        while allowing them to remain safely in the comfort of their own home.
                    </p>

                    <p className="text-gray-600 mt-4 leading-8">
                        From skilled nursing and personal care assistance to companionship and specialized support,
                        our certified caregivers are trained to meet both medical and non-medical needs with professionalism
                        and genuine compassion.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">

                        {/* Request Consultation Button */}
                        <Link to={'/'}>
                            <button className="bg-[#0F3655] text-white px-6 py-4 rounded-xl hover:bg-[#2A9D8F] transition shadow-lg w-full sm:w-auto">
                                <div className="font-semibold text-lg">
                                    Request a Consultation
                                </div>
                                <div className="text-sm mt-1 text-white/80">
                                    Book your care plan
                                </div>
                            </button>
                        </Link>

                        {/* Call Button */}
                        <Link to={'/'}>
                            <button className="bg-white border-2 border-[#0F3655] text-[#0F3655] px-6 py-4 rounded-xl hover:bg-[#2A9D8F] hover:text-white transition shadow-lg w-full sm:w-auto">
                                <div className="font-semibold text-lg">
                                    Call Us Now
                                </div>
                                <div className="text-sm mt-1">
                                    24/7: 978-552-9703
                                </div>
                            </button>
                        </Link>

                    </div>
                </div>

            </section>
            {/* WHY CHOOSE US */}
            <section className="bg-[#0F3655] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#17B7F5] uppercase tracking-[4px] text-sm font-semibold mb-3">
                            Why Choose Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            The L&amp;L staffing solution Difference
                        </h2>
                        <p className="text-white/70 mt-4 max-w-2xl mx-auto leading-8 text-sm">
                            We go beyond standard care to deliver an experience that truly puts
                            our clients and their families first.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {[
                            {
                                title: "Certified Professionals",
                                desc: "All our caregivers are certified, background-checked, and trained to deliver the highest standard of care.",
                                icon: "🏅"
                            },
                            {
                                title: "24/7 Availability",
                                desc: "We are available around the clock to ensure your loved ones always have the support they need.",
                                icon: "🕐"
                            },
                            {
                                title: "Personalized Care Plans",
                                desc: "Every client receives a customized care plan tailored specifically to their unique needs and preferences.",
                                icon: "📋"
                            },
                            {
                                title: "Compassionate Approach",
                                desc: "We treat every client like family with warmth, patience, dignity, and genuine compassion.",
                                icon: "❤️"
                            },
                            {
                                title: "Experienced Team",
                                desc: "Our team brings years of healthcare experience across nursing, personal care, and mental health support.",
                                icon: "👨‍⚕️"
                            },
                            {
                                title: "Family Communication",
                                desc: "We keep families informed and involved every step of the way through regular updates and open communication.",
                                icon: "📞"
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/20 transition duration-300">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-white/70 text-sm leading-7">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE DELIVER CARE */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-[#17B7F5] uppercase tracking-[4px] text-sm font-semibold mb-3">
                            Our Process
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F3655]">
                            How We Deliver Care
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-8 text-sm">
                            From your first call to ongoing support, our process is designed
                            to be simple, stress-free, and centered around you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Initial Consultation",
                                desc: "We start with a free consultation to understand your needs, preferences, and care goals."
                            },
                            {
                                step: "02",
                                title: "Care Plan Creation",
                                desc: "We develop a personalized care plan tailored specifically to the client's needs and lifestyle."
                            },
                            {
                                step: "03",
                                title: "Caregiver Matching",
                                desc: "We carefully match you with a certified caregiver who fits your personality and requirements."
                            },
                            {
                                step: "04",
                                title: "Ongoing Support",
                                desc: "We continuously monitor and adjust the care plan to ensure the highest quality of service."
                            },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[#0F3655] text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                                    {item.step}
                                </div>
                                <h3 className="text-[#0F3655] font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="bg-[#17B7F5] py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/90 mt-4 max-w-xl mx-auto leading-8">
                        Contact us today and let us help you find the right care solution
                        for you or your loved one. We are here 24/7.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="bg-white text-[#0F3655] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
                                Contact Us Today
                            </button>
                        </Link>
                        <Link to="/jobs">
                            <button className="bg-[#0F3655] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1B3A5C] transition shadow-lg w-full sm:w-auto">
                                View Open Positions
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Services