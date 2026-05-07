import logo from "../assets/logo.jpeg";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0F3355] flex items-center justify-center z-50">

      {/* Spinner wrapper */}
      <div className="relative flex items-center justify-center">

        {/* Outer spinning ring */}
        <div className="
          absolute
          w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
          border-4 border-transparent border-t-white border-r-white rounded-full
          animate-spin
        "></div>

        {/* Middle ring */}
        <div className="
          absolute
          w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96
          border-2 border-transparent border-t-blue-300 border-l-blue-300 rounded-full
          animate-spin-slow
        "></div>

        {/* Logo */}
        <img
          src={logo}
          alt="L&L Healthcare Logo"
          className="
            z-10 object-contain rounded-full
            w-24 h-24 sm:w-36 sm:h-36 md:w-60 md:h-60
          "
        />

      </div>
    </div>
  );
};

export default Loader;