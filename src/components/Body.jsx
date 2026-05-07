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
} from "lucide-react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import nurses from "../assets/nurses.jpg";
import works from "../assets/works.jpg";
import llvid from "../assets/llvid.mp4";

const slides = [
    {
        image: slide1,
        title: "Compassionate In-Home Care You Can Trust",
        desc: "Professional caregivers delivering personalized support for your loved ones. We bring comfort, dignity, and expert care directly to your home because family deserves the best.",
        btn: "Request Care Consultation",
    },
    {
        image: slide2,
        title: "Skilled Nurses at Your Doorstep",
        desc: "Qualified healthcare professionals providing clinical-grade medical care at home. From medication management to health assessments, we ensure your loved ones never have to leave home for quality care.",
        btn: "Book a Nurse",
    },
    {
        image: slide3,
        title: "24/7 Reliable Home Support",
        desc: "We ensure safety, comfort, and dignity for every patient, anytime. Our dedicated team is available around the clock to provide consistent, trustworthy care whenever you need it most.",
        btn: "Get Started",
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
    {
        title: "Certified Nursing Assistants Services",
        desc: "Certified Nursing Assistants deliver essential care including hygiene support, mobility assistance, and vital monitoring. Our CNAs work closely with clients to ensure daily needs are met with professionalism and compassion.",
        icon: BriefcaseMedical,
    },
    {
        title: "Registered Nurses Services",
        desc: "Our Registered Nurses provide skilled medical care at home, including medication management, health assessments, and treatment support. We bring clinical expertise directly to you, ensuring high-quality care without leaving home.",
        icon: Stethoscope,
    },
    {
        title: "Personal Care & Transportation",
        desc: "We assist with personal routines and provide reliable transportation to medical appointments, errands, and social visits. Our goal is to help clients maintain independence while staying active and connected to their community.",
        icon: Car,
    },
    {
        title: "Limousine Services",
        desc: "We offer premium limousine transportation for medical appointments, special occasions, and personal errands. Our professional drivers ensure a safe, comfortable, and dignified travel experience for every client.",
        icon: CarFront,
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

                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt="slide"
                                className="w-full h-full object-cover"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/30"></div>

                            {/* TEXT CARD - desktop: left middle, mobile: bottom center */}
                            <div className="
                                absolute bg-[#0F3355]/90 text-white p-6 md:p-10 rounded-xl shadow-lg
                                left-1/2 -translate-x-1/2 bottom-[30px] w-[90%] max-w-sm
                                md:left-14 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-auto
                            ">
                                <h1 className="text-xl md:text-4xl font-bold">
                                    {item.title}
                                </h1>

                                <p className="mt-4 text-sm md:text-base text-gray-200">
                                    {item.desc}
                                </p>

                                <button className="mt-6 bg-white text-[#0F3355] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                                    {item.btn} →
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* ARROWS */}
                <button
                    onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
                >
                    ‹
                </button>

                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-10"
                >
                    ›
                </button>

                {/* DOTS */}
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

            {/* CARE SECTION */}
            <section className="w-full bg-gray-50 py-16">
                <div className="px-6 md:px-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Care You Can Count On
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed">
                        At L&L Healthcare Staffing Agency, we deliver compassionate,
                        personalized home-care services that improve comfort,
                        independence, and quality of life.
                    </p>

                    <button className="mt-8 bg-[#0F3355] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                        Learn More →
                    </button>
                </div>

                {/* IMAGE */}
                <div className="mt-16 w-full -mb-20">
                    <img
                        src={nurses}
                        alt="care team"
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* SERVICES */}
            <section className="w-full bg-[#1B3A5C] pt-20 pb-20 px-6 md:px-12">

                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Our Care Services
                    </h2>

                    <p className="mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        We provide a full range of dependable and compassionate healthcare
                        services designed to support individuals in the comfort of their own
                        homes. Our team is committed to delivering care that not only meets
                        medical needs but also enhances quality of life.
                    </p>

                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Whether it's daily assistance, skilled nursing, or companionship, we
                        take a personalized approach to ensure every client receives the
                        attention, respect, and support they deserve.
                    </p>
                </div>

                <div className="mt-16 space-y-10">
                    {/* First 6 cards — 3 per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.slice(0, 6).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition w-full flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-7 h-7 text-[#1B3A5C]" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:opacity-90 transition">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Last 2 cards — centered */}
                    <div className="flex justify-center gap-10 flex-wrap mt-10">
                        {services.slice(6).map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-[50px] rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition w-full max-w-sm flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                            <Icon className="w-7 h-7 text-[#1B3A5C]" />
                                        </div>
                                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
                                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <div className="w-10 h-10 flex items-center justify-center bg-[#1B3A5C] rounded-full cursor-pointer hover:opacity-90 transition">
                                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </section>

            {/* HOW IT WORKS */}
            <section className="w-full bg-white py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src={works}
                            alt="how it works"
                            className="w-full h-full object-cover rounded-[5px] shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            How It Works
                        </h2>

                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Getting quality care at home shouldn't be complicated. Our process is
                            designed to be simple, supportive, and tailored to your unique needs.
                            We take the time to understand your situation and provide care that
                            promotes comfort, independence, and peace of mind.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            From your first consultation to ongoing care, our team remains committed
                            to delivering reliable support with professionalism and compassion.
                        </p>

                        <div className="mt-8 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                    <CalendarCheck className="w-6 h-6 text-[#1B3A5C]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Schedule a Consultation</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Share your needs with us. We listen carefully, assess your situation, and guide you through the next steps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                    <ClipboardList className="w-6 h-6 text-[#1B3A5C]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Personalized Care Plan</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        We match you with the right caregiver and develop a care plan tailored specifically to your needs and preferences.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                    <UserPlus className="w-6 h-6 text-[#1B3A5C]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Care Begins at Home</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Your caregiver begins providing support—from companionship and daily assistance to skilled nursing care.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1B3A5C]/10">
                                    <RefreshCcw className="w-6 h-6 text-[#1B3A5C]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Ongoing Support & Adjustments</h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                        We continuously monitor care and make adjustments as needs change, ensuring consistent and reliable support.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="w-full">
                <video
                    src={llvid}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                />
            </section>
            {/* CTA BANNER */}
            <section className="w-full bg-[#0F3355] py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Ready to Get Started?
                </h2>
                <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                    Contact us today and let us help you find the right care solution for your loved one.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="bg-white text-[#0F3355] px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
                        Contact Us
                    </a>
                    <a href="/apply" className="bg-[#2A9D8F] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition">
                        Apply Now
                    </a>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="w-full bg-gray-50 py-20 px-6 md:px-12">

                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-sm uppercase tracking-wider text-[#1B3A5C] font-semibold">
                        L&L Healthcare
                    </h3>
                    <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                        What Families Are Saying
                    </h2>
                </div>

                <div className="mt-16 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 w-max snap-x snap-mandatory">

                        <div className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                            <div className="flex text-yellow-400 text-lg">★★★★★</div>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                L&L Healthcare truly went above and beyond. The caregivers showed genuine kindness and treated my mom with so much respect. It gave our entire family peace of mind knowing she was in good hands.
                            </p>
                            <h4 className="mt-6 font-semibold text-gray-900">Sarah M.</h4>
                            <span className="text-sm text-gray-500">Family Member</span>
                        </div>

                        <div className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                            <div className="flex text-yellow-400 text-lg">★★★★★</div>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                From the initial consultation to daily visits, everything felt organized and professional. The nurse caring for my father was attentive, knowledgeable, and always punctual.
                            </p>
                            <h4 className="mt-6 font-semibold text-gray-900">Michael R.</h4>
                            <span className="text-sm text-gray-500">Client's Son</span>
                        </div>

                        <div className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                            <div className="flex text-yellow-400 text-lg">★★★★★</div>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                After surgery, I needed short-term support at home. L&L Healthcare made everything smooth and stress-free. They checked in often and adjusted care as I recovered.
                            </p>
                            <h4 className="mt-6 font-semibold text-gray-900">Janet K.</h4>
                            <span className="text-sm text-gray-500">Patient</span>
                        </div>

                        <div className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                            <div className="flex text-yellow-400 text-lg">★★★★★</div>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                What stood out most was the connection they built with our dad. It wasn't just care—it felt personal. Their compassion made a real difference in his daily life.
                            </p>
                            <h4 className="mt-6 font-semibold text-gray-900">Linda & James P.</h4>
                            <span className="text-sm text-gray-500">Family Members</span>
                        </div>

                        <div className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition">
                            <div className="flex text-yellow-400 text-lg">★★★★★</div>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                We needed full-time care for our aunt, and L&L Healthcare delivered exactly what they promised. The caregivers were patient, skilled, and incredibly supportive throughout.
                            </p>
                            <h4 className="mt-6 font-semibold text-gray-900">Angela T.</h4>
                            <span className="text-sm text-gray-500">Family Member</span>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Body;