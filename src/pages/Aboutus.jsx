import React, { useEffect, useState } from 'react'
import { HeartHandshake, Star, Shield, Users, Award, ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

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
    text: "L&L Healthcare truly went above and beyond. The caregivers showed genuine kindness and treated my mom with so much respect. It gave our entire family peace of mind.",
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
    text: "What stood out most was the connection they built with our dad. It wasn't just care — it felt personal. Their compassion made a real difference in his daily life.",
    name: "Linda & James P.",
    role: "Family Members"
  },
  {
    text: "We needed full-time care for our aunt, and L&L Healthcare delivered exactly what they promised. The caregivers were patient, skilled, and incredibly supportive.",
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
            <span className="inline-block text-[#17B7F5] text-lg font-bold uppercase tracking-widest mb-4 underline underline-offset-[7px] decoration-2 decoration-[#17B7F5]">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Care You Can Count On,<br />
              <span className="text-[#17B7F5]">People You Can Trust</span>
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              At L&L Healthcare Staffing Solution, we provide personalized in-home care
              and skilled nursing services that help individuals live safely, comfortably,
              and with dignity at home.
            </p>
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
                L&L Healthcare Staffing Solution (formerly Just Care Staffing Agency LLC) is a licensed
                and registered Limited Liability Company dedicated to supporting individuals and families
                with compassionate, professional in-home care services.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We specialize in matching clients with qualified caregivers and nurses who deliver
                personalized care that respects each individual's lifestyle, preferences, and health needs.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Based at <span className="font-semibold text-[#1B3A5C]">91 Mill Street, Suite 1, Randolph, MA 02368</span>,
                we proudly serve families across surrounding communities, offering dependable care solutions
                that bring comfort, confidence, and peace of mind.
              </p>
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

        {/* MISSION & VISION */}
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#1B3A5C]/10 rounded-full flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-[#1B3A5C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A5C]">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To deliver high-quality, compassionate in-home care that enhances independence,
                promotes wellbeing, and supports families through every stage of care.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
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
        <section className="w-full bg-white py-20 px-6 md:px-12">
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
                  <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-[#1B3A5C] hover:shadow-lg transition-all duration-300">
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

      </div>
      <Footer />
    </>
  )
}

export default Aboutus