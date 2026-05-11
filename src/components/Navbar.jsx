import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo3.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[999] bg-[#0F3655] lg:px-[30px] px-6 flex items-center justify-between h-20">
                <Link to={"/"}>
                    <div className="flex items-center  h-full ">
                        <img
                            src={logo}
                            alt="L&L Healthcare"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                        <span className="text-white font-bold text-lg tracking-wide font-serif">
                            L&L Healthcare <br /> Staffing Solution
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Home</Link>
                    <Link to="/aboutus" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">About Us</Link>
                    <Link to="/services" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Our-Services</Link>
                    <Link to="/Appointment" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Appointments</Link>
                    <Link to="/jobs" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Jobs</Link>
                    <Link to="/contact" className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Contact</Link>
                    <Link
                        to="/apply"
                        className="bg-[#2A9D8F] text-white px-4 py-2 rounded-md text-sm hover:bg-[#238276]"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(true)}
                >
                    ☰
                </button>
            </nav>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Offcanvas */}
            <div
                className={`fixed top-0 left-0 h-full w-[70%] bg-[#1B3A5C] z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="L&L Healthcare" className="h-10 w-auto" />
                        <span className="text-white font-bold text-sm font-serif">
                            L&L Healthcare
                        </span>
                    </div>
                    <button
                        className="text-white text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <div className="flex flex-col gap-5 px-5 py-6">
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Home</Link>
                    <Link to="/aboutus" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">About Us</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Our-Services</Link>
                    <Link to="/Appointment" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Appointments</Link>
                    <Link to="/jobs" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Jobs</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white/85 font-semibold text-sm hover:text-[#17B7F5]">Contact</Link>
                    <Link
                        to="/apply"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#2A9D8F] text-white px-4 py-2 rounded-md text-sm text-center hover:bg-[#238276]"
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar