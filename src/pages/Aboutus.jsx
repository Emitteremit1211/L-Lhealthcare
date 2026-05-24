import React, { useEffect, useState } from 'react'
import { HeartHandshake, Star, Shield, Users, Award, ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/nurses.avif'

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    desc: "We treat every client with empathy, patience, and respect because every person deserves to feel valued and cared for."
  },
  {
    icon: Award,
    title: "Professional Excellence",
    desc: "We uphold the highest standards in caregiving through rigorous training, supervision, and accountability at every level."
  },
  {
    icon: Users,
    title: "Personalized Care",
    desc: "Every care plan is tailored to the individual. No one-size-fits-all solutions only care that fits your life."
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    desc: "We communicate openly and act in the best interest of our clients and their families, always."
  },
]

const testimonials = [
  {
    text: "L&L staffing Solution truly went above and beyond. The caregivers showed genuine kindness and treated my mom with so much respect. It gave our entire family peace of mind.",
    name: "Sarah M.",
    role: "Family Member"
  },
  {
    text: "From the initial consultation to daily visits, everything felt organized and professional. The nurse caring for my father was attentive, knowledgeable, and always punctual.",
    name: "Michael R.",
    role: "Client's Son"
  },
  {
    text: "After surgery, I needed short-term support at home. L&L Healthcare made everything smooth and stress-free. They checked in often and adjusted care as I recovered.",
    name: "Janet K.",
    role: "Patient"
  },
  {
    text: "What stood out most was the connection they built with our dad. It wasn't just care it felt personal. Their compassion made a real difference in his daily life.",
    name: "Linda & James P.",
    role: "Family Members"
  },
  {
    text: "We needed full-time care for our aunt, and L&L staffing solution delivered exactly what they promised. The caregivers were patient, skilled, and incredibly supportive.",
    name: "Angela T.",
    role: "Family Member"
  },
]

const Aboutus = () => {
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
      <div className="w-full font-sans">

        {/* HERO */}
        <section className="w-full bg-[#0F3355] py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #17B7F5 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #2A9D8F 0%, transparent 40%)`
            }}
          />
          <div className="max-w-4xl mx-auto text-center relative z-10 mt-[30px]">
            <span className="inline-block text-[#17B7F5] text-lg font-bold uppercase tracking-widest mb-4 underline underline-offset-[7px] decoration-4 decoration-[#17B7F5]">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Care You Can Count On,<br />
              <span className="text-[#17B7F5]">People You Can Trust</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              At L&amp;L Staffing Solution, we provide personalized in-home care
              and skilled nursing services that help individuals live safely, comfortably,
              and with dignity at home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[#17B7F5] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0ea5d8] transition">
                  Get In Touch
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition border border-white/20">
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="w-full bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2A9D8F] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B3A5C] leading-snug">
                A Trusted Partner in Home-Based Healthcare
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                L&amp;L Staffing Solution (formerly Just Care Staffing Agency LLC) is a licensed
                and registered Limited Liability Company in the Commonwealth of Massachusetts,
                dedicated to supporting individuals and families with compassionate, professional
                in-home care services.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded and led by <span className="font-semibold text-[#1B3A5C]">Felix Osho</span> and <span className="font-semibold text-[#1B3A5C]">Akintunde Okufuwa</span>,
                the company was officially registered and filed with the Massachusetts Secretary of State,
                Corporations Division in <span className="font-semibold text-[#1B3A5C]">2025</span> built on a shared vision of delivering
                trusted and guaranteed staffing solutions across the state.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Based at <span className="font-semibold text-[#1B3A5C]">91 Mill Street, Suite 1, Randolph, MA 02368</span>,
                we proudly serve families across surrounding communities, offering dependable care solutions
                that bring comfort, confidence, and peace of mind.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Licensed & Registered LLC in Massachusetts",
                  "Certified and background-checked caregivers",
                  "Personalized care plans for every client",
                  "Available 24/7 for care and support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1B3A5C] text-white p-8 rounded-2xl">
                <h3 className="text-4xl font-bold text-[#17B7F5]">8+</h3>
                <p className="mt-2 text-gray-300 text-sm">Care Services Offered</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-4xl font-bold text-[#1B3A5C]">24/7</h3>
                <p className="mt-2 text-gray-500 text-sm">Round-the-Clock Support</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-4xl font-bold text-[#1B3A5C]">100%</h3>
                <p className="mt-2 text-gray-500 text-sm">Personalized Care Plans</p>
              </div>
              <div className="bg-[#1B3A5C] text-white p-8 rounded-2xl">
                <h3 className="text-4xl font-bold text-white">MA</h3>
                <p className="mt-2 text-green-100 text-sm">Licensed & Registered in Massachusetts</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDERS SECTION */}
<section className="w-full bg-gray-50 py-20 px-6 md:px-12">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-14">
      <span className="text-[#2A9D8F] text-sm font-semibold uppercase tracking-widest">Leadership</span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B3A5C]">
        Meet Our Team
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm">
        L&amp;L Staffing Solution was built by passionate individuals
        committed to transforming home-based healthcare in Massachusetts.
      </p>
    </div>

    {/* Founders row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

      {/* Felix */}
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="w-20 h-20 rounded-full bg-[#1B3A5C] flex items-center justify-center text-white text-3xl font-bold mb-6">
          FO
        </div>
        <h3 className="text-2xl font-bold text-[#1B3A5C]">Felix Osho</h3>
        <p className="text-[#2A9D8F] text-sm font-semibold mt-1">Co-Founder & Managing Director</p>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
          Felix Osho is a co-founder and resident agent of L&amp;L Staffing Solution LLC,
          based at 91 Mill Street, Suite 1, Randolph, MA 02368. His leadership and dedication
          to quality care have been instrumental in shaping the company's mission of delivering
          trusted and guaranteed staffing solutions across Massachusetts.
        </p>
        <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 text-[#1B3A5C]" />
          Randolph, MA 02368
        </div>
      </div>

      {/* Akintunde */}
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
        <div className="w-20 h-20 rounded-full bg-[#2A9D8F] flex items-center justify-center text-white text-3xl font-bold mb-6">
          AO
        </div>
        <h3 className="text-2xl font-bold text-[#1B3A5C]">Akintunde Okufuwa</h3>
        <p className="text-[#2A9D8F] text-sm font-semibold mt-1">Co-Founder & Operations Director</p>
        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
          Akintunde Okufuwa is a co-founder and managing member of L&amp;L Staffing Solution LLC.
          His operational expertise and commitment to compassionate care have been central to building
          a company that families across Massachusetts can rely on for consistent, professional,
          and personalized healthcare staffing services.
        </p>
        <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 text-[#1B3A5C]" />
          Randolph, MA 02368
        </div>
      </div>
    </div>

    {/* Rashidat — centered */}
    <div className="flex justify-center">
      <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-md transition w-full md:w-[calc(50%-20px)]">
        <div className="w-20 h-20 rounded-full bg-[#17B7F5] flex items-center justify-center text-white text-3xl font-bold mb-6">
          RO
        </div>
        <h3 className="text-2xl font-bold text-[#1B3A5C]">Rashidat Osho, RN</h3>
        <p className="text-[#2A9D8F] text-sm font-semibold mt-1">Clinical Supervisor (RN)</p>
        <ul className="mt-4 space-y-2">
          {[
            "Registered Nurse (RN), NARIS verified",
            "Provides clinical oversight for all care services",
            "Conducts staff training and professional development",
            "Ensures quality assurance and adherence to clinical protocols",
            "Supports continuous improvement in client care and staff performance",
            "Employed on an as-needed basis based on job load",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17B7F5] flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 text-[#1B3A5C]" />
          Randolph, MA 02368
        </div>
      </div>
    </div>

  </div>
</section>

        {/* MISSION & VISION */}
        <section className="w-full bg-white py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#1B3A5C] p-10 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                To deliver high-quality, compassionate in-home care that enhances independence,
                promotes wellbeing, and supports families through every stage of care.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5C]">Our Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To be a trusted leader in home-care services, known for excellence, integrity,
                and a genuine commitment to improving the lives of every client we serve.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[#2A9D8F] text-sm font-semibold uppercase tracking-widest">Our Core Values</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B3A5C]">
                Care Rooted in Compassion.<br />Guided by Expertise.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon
                return (
                  <div key={i} className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-[#1B3A5C] hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center group-hover:bg-[#1B3A5C] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#1B3A5C] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="mt-5 text-lg font-semibold text-[#1B3A5C]">{val.title}</h4>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHY TRUST US */}
        <section className="w-full bg-[#0F3355] py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#17B7F5] text-sm font-semibold uppercase tracking-widest">Why Trust Us</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-snug">
                Built on Trust.<br />Powered by Compassion.
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Choosing a healthcare provider is one of the most important decisions a family can make.
                We understand that trust must be earned through consistent, reliable, and compassionate care.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Registered LLC with the Commonwealth of Massachusetts",
                  "All caregivers are certified and thoroughly vetted",
                  "Personalized care plans reviewed and updated regularly",
                  "Transparent communication with families at all times",
                  "Serving HHA, ACS, CNA, RN, and Personal Care needs",
                  "Available 24/7 including weekends and holidays",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#17B7F5] shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Registered", sub: "Commonwealth of Massachusetts", color: "bg-white/10" },
                { label: "Certified", sub: "Background-checked caregivers", color: "bg-[#17B7F5]/20" },
                { label: "Insured", sub: "Fully covered for your peace of mind", color: "bg-[#2A9D8F]/20" },
                { label: "Trusted", sub: "By families across Massachusetts", color: "bg-white/10" },
              ].map((item, i) => (
                <div key={i} className={`${item.color} backdrop-blur-md border border-white/10 rounded-2xl p-6`}>
                  <h4 className="text-white text-xl font-bold">{item.label}</h4>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#1B3A5C] text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1B3A5C]">What Families Are Saying</h2>
          </div>

          <div className="mt-14 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 w-max snap-x snap-mandatory">
              {testimonials.map((t, i) => (
                <div key={i} className="snap-start bg-white p-8 rounded-2xl shadow-md w-[300px] md:w-[350px] flex-shrink-0 hover:-translate-y-2 transition duration-300">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm">"{t.text}"</p>
                  <h4 className="mt-6 font-semibold text-[#1B3A5C]">{t.name}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section className="w-full bg-[#2A9D8F] py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Learn More?
            </h2>
            <p className="text-white/90 mt-4 max-w-xl mx-auto leading-8 text-sm">
              Reach out to our team today and let us help you find the right care
              solution for you or your loved one.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-[#2A9D8F] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
                  Contact Us
                </button>
              </Link>
              <Link to="/services">
                <button className="bg-[#0F3355] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1B3A5C] transition shadow-lg">
                  View Our Services
                </button>
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-white/90 text-sm">
              {[
                { href: "tel:+1617697-3888", icon: Phone, label: "+1 (617) 697-3888" },
                { href: "tel:+1978552-9703", icon: Phone, label: "+1 (978) 552-9703" },
                { href: "mailto:info@llstaffingsolution.com", icon: Mail, label: "info@llstaffingsolution.com" },
                { href: "https://www.google.com/maps/search/?api=1&query=91+Mill+Street+Suite+1+Randolph+MA+02368", icon: MapPin, label: "91 Mill Street, Randolph, MA" },
              ].map(({ href, icon: Icon, label }) => (
                React.createElement("a", {
                  key: label,
                  href: href,
                  target: href.startsWith("http") ? "_blank" : "_self",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 justify-center hover:text-white transition text-white/90 text-sm"
                },
                  React.createElement(Icon, { className: "w-4 h-4" }),
                  label
                )
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Aboutus