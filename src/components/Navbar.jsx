import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logoremoved.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    const linkClass = (path) =>
        `font-semibold text-sm transition-colors ${
            pathname === path ? "text-[#17B7F5]" : "text-white/85 hover:text-[#17B7F5]"
        }`

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[999] bg-[#0F3655] lg:px-[30px] px-6 flex items-center justify-between h-20">
                <Link to={"/"}>
                    <div className="flex items-center h-full">
                        <img
                            src={logo}
                            alt="LL Staffing Solution"
                            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                        />
                        <span className="text-white font-bold text-lg tracking-wide font-serif">
                            L&LStaffing <br /> Solution
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <Link to="/" className={linkClass("/")}>Home</Link>
                    <Link to="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
                    <Link to="/services" className={linkClass("/services")}>Our Services</Link>
                    <Link to="/Appointment" className={linkClass("/Appointment")}>Appointments</Link>
                    <Link to="/jobs" className={linkClass("/jobs")}>Jobs</Link>
                    <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
                    <Link
                        to="/apply"
                        className={`px-4 py-2 rounded-md text-sm text-white transition-colors ${
                            pathname === "/apply" ? "bg-[#238276]" : "bg-[#2A9D8F] hover:bg-[#238276]"
                        }`}
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
                className={`fixed top-0 left-0 h-full w-[70%] bg-[#1B3A5C] z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="L&L Staffing Solution" className="h-10 w-auto" />
                        <span className="text-white font-bold text-sm font-serif">
                            L&L Staffing Solution
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
                    <Link to="/" onClick={() => setIsOpen(false)} className={linkClass("/")}>Home</Link>
                    <Link to="/aboutus" onClick={() => setIsOpen(false)} className={linkClass("/aboutus")}>About Us</Link>
                    <Link to="/services" onClick={() => setIsOpen(false)} className={linkClass("/services")}>Our Services</Link>
                    <Link to="/Appointment" onClick={() => setIsOpen(false)} className={linkClass("/Appointment")}>Appointments</Link>
                    <Link to="/jobs" onClick={() => setIsOpen(false)} className={linkClass("/jobs")}>Jobs</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className={linkClass("/contact")}>Contact</Link>
                    <Link
                        to="/apply"
                        onClick={() => setIsOpen(false)}
                        className={`px-4 py-2 rounded-md text-sm text-white text-center transition-colors ${
                            pathname === "/apply" ? "bg-[#238276]" : "bg-[#2A9D8F] hover:bg-[#238276]"
                        }`}
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar