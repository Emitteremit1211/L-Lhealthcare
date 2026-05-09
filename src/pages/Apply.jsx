import React, { useState, useMemo } from "react";
import Select from "react-select";
import applyImage from "../assets/apply.jpg"; // or .png
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Apply = () => {
  const [country, setCountry] = useState(null);

  // Full country list (ISO-based simple version with flags)
  const countries = useMemo(() => {
    const list = [
      ["NG", "Nigeria", "+234"],
      ["US", "United States", "+1"],
      ["GB", "United Kingdom", "+44"],
      ["CA", "Canada", "+1"],
      ["DE", "Germany", "+49"],
      ["FR", "France", "+33"],
      ["IN", "India", "+91"],
      ["ZA", "South Africa", "+27"],
      ["AU", "Australia", "+61"],
      ["BR", "Brazil", "+55"],
      ["CN", "China", "+86"],
      ["JP", "Japan", "+81"],
      ["IT", "Italy", "+39"],
      ["ES", "Spain", "+34"],
      ["MX", "Mexico", "+52"],
      ["KE", "Kenya", "+254"],
      ["GH", "Ghana", "+233"],
      ["EG", "Egypt", "+20"],
      ["SA", "Saudi Arabia", "+966"],
    ];

    return list.map(([code, name, dial]) => ({
      value: name,
      label: `${getFlag(code)} ${name} (${dial})`,
    }));
  }, []);

  function getFlag(code) {
    return code
      .toUpperCase()
      .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt()));
  }

  const customSelect = {
    control: (base) => ({
      ...base,
      borderRadius: "12px",
      padding: "6px",
      borderColor: "#d1d5db",
      minHeight: "52px",
      boxShadow: "none",
      "&:hover": { borderColor: "#0F3655" },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      country,
      cv: form.cv.files[0],
      resume: form.resume.files[0],
    };

    if (!country) {
      alert("Please select a country");
      return;
    }

    if (!data.cv || !data.resume) {
      alert("CV and Resume are required");
      return;
    }

    alert("Application submitted successfully!");
    console.log(data);
  };

  return (
            <>
            <Navbar/>
    <section className="min-h-screen bg-white mt-[50px]">

      {/* HERO */}
      <div className="bg-[#0F3655] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Career Application Form
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Submit your details, CV, and resume to apply for available positions.
        </p>
      </div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-16 items-center">

        {/* IMAGE */}
        <div>
          <img
            src={applyImage}
            alt="Apply"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* FORM */}
        <div className="bg-white border shadow-xl rounded-3xl p-8 md:p-10">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <div>
              <label className="text-[#0F3655] font-semibold">Full Name</label>
              <input
                required
                name="name"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                placeholder="Enter full name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-[#0F3655] font-semibold">Email</label>
              <input
                required
                type="email"
                name="email"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                placeholder="example@email.com"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-[#0F3655] font-semibold">Phone Number</label>
              <input
                required
                name="phone"
                type="tel"
                className="w-full mt-2 border rounded-xl px-4 py-3"
                placeholder="+234 801 234 5678"
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="text-[#0F3655] font-semibold">Country</label>
              <Select
                options={countries}
                value={country}
                onChange={setCountry}
                styles={customSelect}
                placeholder="Select country"
                isSearchable
              />
            </div>

            {/* CV */}
            <div>
              <label className="text-[#0F3655] font-semibold">CV Upload</label>
              <input
                required
                name="cv"
                type="file"
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            {/* RESUME */}
            <div>
              <label className="text-[#0F3655] font-semibold">Resume Upload</label>
              <input
                required
                name="resume"
                type="file"
                className="w-full mt-2 border rounded-xl px-4 py-3"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0F3655] text-white py-4 rounded-xl font-semibold hover:bg-[#17496f] transition"
            >
              Submit Application
            </button>

          </form>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Apply;