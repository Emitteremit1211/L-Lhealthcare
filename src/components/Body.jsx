import React from "react";
import { useState, useEffect } from "react";
import {
    HeartHandshake,
    UserCheck,
    Stethoscope,
    BriefcaseMedical,
    Car,
    ArrowRight,
    CalendarCheck,
    ClipboardList,
    UserPlus,
    RefreshCcw,
    Brain,
    Home,
    CarFront,
    Phone,
    MapPin,
    CheckCircle,
} from "lucide-react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import nurses from "../assets/nurses.jpg";
import works from "../assets/works.jpg";
import llvid from "../assets/llvid.mp4";
import { Link } from "react-router-dom";

const slides = [
    {
        image: slide1,
        title: "Compassionate In-Home Care You Can Trust",
        desc: "Professional caregivers delivering personalized support for your loved ones. We bring comfort, dignity, and expert care directly to your home because family deserves the best.",
        btn: "Request Care Consultation",
        link: "/Appointment",
    },
    {
        image: slide2,
        title: "Skilled Nurses at Your Doorstep",
        desc: "Qualified healthcare professionals providing clinical-grade medical care at home. From medication management to health assessments, we ensure your loved ones never have to leave home for quality care.",
        btn: "Book a Nurse",
        link: "/contact",
    },
    {
        image: slide3,
        title: "24/7 Reliable Home Support",
        desc: "We ensure safety, comfort, and dignity for every patient, anytime. Our dedicated team is available around the clock to provide consistent, trustworthy care whenever you need it most.",
        btn: "Get Started",
        link: "/apply",
    },
];

const services = [
    {
        title: "Home Health Aides Services",
        desc: "Our Home Health Aides provide hands-on assistance with everyday activities such as bathing, dressing, grooming, and mobility. We focus on maintaining dignity while ensuring clients feel comfortable, safe, and supported in their own homes.",
        icon: HeartHandshake,
    },
    {
        title: "Attendant Care Services",
        desc: "Our Attendant Care Services offer dependable companionship and supervision. Whether it's engaging in conversation, light activities, or simply being present, we help reduce isolation and create a sense of comfort and connection.",
        icon: UserCheck,
    },
    // {
    //     title: "Certified Nursing Assistants Services",
    //     desc: "Certified Nursing Assistants deliver essential care including hygiene support, mobility assistance, and vital monitoring. Our CNAs work closely with clients to ensure daily needs are met with professionalism and compassion.",
    //     icon: BriefcaseMedical,
    // },
    // {
    //     title: "Registered Nurses Services",
    //     desc: "Our Registered Nurses provide skilled medical care at home, including medication management, health assessments, and treatment support. We bring clinical expertise directly to you, ensuring high-quality care without leaving home.",
    //     icon: Stethoscope,
    // },
    // {
    //     title: "Personal Care & Transportation",
    //     desc: "We assist with personal routines and provide reliable transportation to medical appointments, errands, and social visits. Our goal is to help clients maintain independence while staying active and connected to their community.",
    //     icon: Car,
    // },
    // {
    //     title: "Limousine Services",
    //     desc: "We offer premium limousine transportation for medical appointments, special occasions, and personal errands. Our professional drivers ensure a safe, comfortable, and dignified travel experience for every client.",
    //     icon: CarFront,
    // },
    {
        title: "Providing Mental Health Services",
        desc: "Our mental health support services are designed to promote emotional well-being and psychological stability. We connect clients with compassionate professionals who provide counseling, crisis support, and ongoing mental wellness care.",
        icon: Brain,
    },
    // {
    //     title: "Home Care Program Services",
    //     desc: "Our comprehensive Home Care Program offers structured, long-term support tailored to each client's evolving needs. From routine check-ins to full-time assistance, we ensure continuity of care that promotes independence and quality of life.",
    //     icon: Home,
    // },
];

const Body = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full">

            {/* SLIDER */}
            <section className="relative w-full h-screen overflow-hidden">
                <div
                    className="flex h-full w-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((item, index) => (
                        <div key={index} className="relative w-full h-full flex-shrink-0">
                            <img src={item.image} alt="slide" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30"></div>
                            <div className="
                                absolute bg-[#0F3355]/90 text-white p-6 md:p-10 rounded-xl shadow-lg
                                left-1/2 -translate-x-1/2 bottom-[40px] w-[90%] max-w-lg
                                md:left-14 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-auto
                            ">
                                <h1 className="text-xl md:text-4xl font-bold">{item.title}</h1>
                                <p className="mt-4 text-sm md:text-base text-gray-200">{item.desc}</p>
                                <Link to={item.link}>
                                    <button className="mt-6 bg-white text-[#0F3355] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                                        {item.btn} →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
                >‹</button>

                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
                >›</button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? "bg-white" : "bg-white/40"}`}
                        />
                    ))}
                </div>
            </section>

            {/* QUICK INFO BAR */}
            <section className="bg-[#1B3A5C] py-4 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white text-sm">
                    {React.createElement("a", {
                        href: "tel:+19785529703",
                        className: "flex items-center gap-2 hover:text-[#17B7F5] transition"
                    },
                        React.createElement(Phone, { className: "w-4 h-4" }),
                        "978-552-9703 - Available 24/7"
                    )}
                    {React.createElement("a", {
                        href: "https://www.google.com/maps/search/?api=1&query=91+Mill+Street+Suite+1+Randolph+MA+02368",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 hover:text-[#17B7F5] transition"
                    },
                        React.createElement(MapPin, { className: "w-4 h-4" }),
                        "91 Mill Street, Suite 1, Randolph, MA 02368"
                    )}
                    <Link to="/jobs" className="flex items-center gap-2 hover:text-[#17B7F5] transition">
                        We Are Hiring → View Open Positions
                    </Link>
                </div>
            </section>

            {/* CARE SECTION */}
            <section className="w-full bg-gray-50 py-16">
                <div className="px-6 md:px-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Care You Can Count On
                    </h2>
                    <p className="mt-6 text-gray-600 leading-relaxed">
                        At L&amp;L Healthcare Staffing Agency, we deliver compassionate,
                        personalized home-care services that improve comfort,
                        independence, and quality of life.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/services">
                            <button className="bg-[#0F3355] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                                Learn More →
                            </button>
                        </Link>
                        <Link to="/appointment">
                            <button className="bg-white border-2 border-[#0F3355] text-[#0F3355] px-6 py-3 rounded-md font-semibold hover:bg-[#0F3355] hover:text-white transition">
                                Request Consultation
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="mt-16 w-full -mb-20">
                    <img src={nurses} alt="care team" className="w-full object-cover" />
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="w-full bg-[#0F3355] pt-28 pb-16 px-6 md:px-12">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: "8+", label: "Care Services" },
                        { value: "24/7", label: "Support Available" },
                        { value: "100%", label: "Personalized Plans" },
                        { value: "MA", label: "Licensed & Registered" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl py-6 px-4 border border-white/10">
                            <h3 className="text-white text-3xl font-bold">{stat.value}</h3>
                            <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="w-full bg-[#1B3A5C] pt-20 pb-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold">Our Care Services</h2>
                    <p className="mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        We provide a full range of dependable and compassionate healthcare
                        services designed to support individuals in the comfort of their own homes.
                    </p>
                </div>

                <div className="mt-16 space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.slice(0, 6).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition w-full flex flex-col justify-between group">
                                    <div>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-7 h-7 text-[#1B3A5C]" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <Link to="/services">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:opacity-90 transition">
                                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center gap-10 flex-wrap mt-10">
                        {services.slice(3).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition w-full max-w-sm flex flex-col justify-between group">
                                    <div>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-7 h-7 text-[#1B3A5C]" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <Link to="/services">
                                            <div className="w-10 h-10 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:opacity-90 transition">
                                                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/services">
                            <button className="bg-white text-[#1B3A5C] px-8 py-3 rounded-xl font-semibold hover:bg-[#17B7F5] hover:text-white transition">
                                View All Services →
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-[#2A9D8F] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B3A5C]">
                            The L&amp;L Healthcare Difference
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Licensed & Registered", desc: "Officially registered LLC with the Commonwealth of Massachusetts certified and trustworthy.", icon: "🏛️" },
                            { title: "Certified Professionals", desc: "All caregivers are certified, background-checked, and trained to the highest standard.", icon: "🏅" },
                            { title: "24/7 Availability", desc: "Round-the-clock support ensuring your loved ones always have care when they need it.", icon: "🕐" },
                            { title: "Personalized Care Plans", desc: "Every client receives a custom care plan tailored to their unique needs and lifestyle.", icon: "📋" },
                            { title: "Compassionate Team", desc: "We treat every client like family with warmth, patience, and genuine compassion.", icon: "❤️" },
                            { title: "Trusted by Families", desc: "Families across Massachusetts trust us for consistent, reliable, and dignified care.", icon: "👨‍👩‍👧" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-[#1B3A5C] font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="w-full bg-white py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={works} alt="how it works" className="w-full h-full object-cover rounded-[5px] shadow-lg" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">How It Works</h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Getting quality care at home shouldn't be complicated. Our process is
                            designed to be simple, supportive, and tailored to your unique needs.
                        </p>
                        <div className="mt-8 space-y-6">
                            {[
                                { icon: CalendarCheck, title: "Schedule a Consultation", desc: "Share your needs with us. We listen carefully, assess your situation, and guide you through the next steps." },
                                { icon: ClipboardList, title: "Personalized Care Plan", desc: "We match you with the right caregiver and develop a care plan tailored specifically to your needs." },
                                { icon: UserPlus, title: "Care Begins at Home", desc: "Your caregiver begins providing support from companionship and daily assistance to skilled nursing care." },
                                { icon: RefreshCcw, title: "Ongoing Support & Adjustments", desc: "We continuously monitor care and make adjustments as needs change, ensuring consistent support." },
                            ].map(({ icon: Icon, title, desc }, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10 shrink-0">
                                        <Icon className="w-6 h-6 text-[#1B3A5C]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{title}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex gap-4">
                            <Link to="/contact">
                                <button className="bg-[#1B3A5C] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2A9D8F] transition">
                                    Get Started
                                </button>
                            </Link>
                            <Link to="/services">
                                <button className="bg-gray-100 text-[#1B3A5C] px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                                    Our Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="w-full">
                <video src={llvid} autoPlay loop muted playsInline className="w-full max-h-[500px] object-cover" />
            </section>

            {/* CTA BANNER */}
            <section className="w-full bg-[#0F3355] py-16 px-6 text-center">
                <span className="text-[#17B7F5] text-sm font-semibold uppercase tracking-widest">Take Action</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                    Ready to Get Started?
                </h2>
                <p className="mt-4 text-gray-300 max-w-xl mx-auto leading-8">
                    Contact us today and let us help you find the right care solution for your loved one.
                    Our team is available 24/7.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                        <button className="bg-white text-[#0F3355] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
                            Contact Us
                        </button>
                    </Link>
                    <Link to="/apply">
                        <button className="bg-[#2A9D8F] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#238276] transition shadow-lg">
                            Apply Now
                        </button>
                    </Link>
                    <Link to="/jobs">
                        <button className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition border border-white/20">
                            View Open Positions
                        </button>
                    </Link>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-white/60 text-sm">
                    {[
                        { icon: CheckCircle, text: "Licensed & Registered LLC" },
                        { icon: CheckCircle, text: "Certified Caregivers" },
                        { icon: CheckCircle, text: "24/7 Available" },
                    ].map(({ icon: Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-2 justify-center">
                            <Icon className="w-4 h-4 text-[#17B7F5]" />
                            {text}
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-sm uppercase tracking-wider text-[#1B3A5C] font-semibold">L&amp;L Healthcare</h3>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">What Families Are Saying</h2>
                </div>

                <div className="mt-16 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 w-max snap-x snap-mandatory">
                        {[
                            { text: "L&L Healthcare truly went above and beyond. The caregivers showed genuine kindness and treated my mom with so much respect. It gave our entire family peace of mind knowing she was in good hands.", name: "Sarah M.", role: "Family Member" },
                            { text: "From the initial consultation to daily visits, everything felt organized and professional. The nurse caring for my father was attentive, knowledgeable, and always punctual.", name: "Michael R.", role: "Client's Son" },
                            { text: "After surgery, I needed short-term support at home. L&L Healthcare made everything smooth and stress-free. They checked in often and adjusted care as I recovered.", name: "Janet K.", role: "Patient" },
                            { text: "What stood out most was the connection they built with our dad. It wasn't just care it felt personal. Their compassion made a real difference in his daily life.", name: "Linda & James P.", role: "Family Members" },
                            { text: "We needed full-time care for our aunt, and L&L Healthcare delivered exactly what they promised. The caregivers were patient, skilled, and incredibly supportive throughout.", name: "Angela T.", role: "Family Member" },
                        ].map((t, i) => (
                            <div key={i} className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                                <p className="mt-4 text-gray-600 leading-relaxed text-sm">{t.text}</p>
                                <h4 className="mt-6 font-semibold text-gray-900">{t.name}</h4>
                                <span className="text-sm text-gray-500">{t.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Body;