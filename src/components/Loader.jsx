import logo from "../assets/logo.jpeg";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0F3355] flex items-center justify-center z-50">
      
      {/* Spinner wrapper */}
      <div className="relative flex items-center justify-center">

        {/* Outer spinning ring */}
        <div
          className="
            absolute
            w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80
            border-4 border-transparent border-t-white border-r-white rounded-full
            animate-spin
          "
          style={{ animationDuration: "1.5s" }}
        ></div>

        {/* Middle spinning ring */}
        <div
          className="
            absolute
            w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem]
            border-2 border-transparent border-t-blue-300 border-l-blue-300 rounded-full
            animate-spin
          "
          style={{
            animationDuration: "3s",
            animationDirection: "reverse",
          }}
        ></div>

        {/* Logo */}
        <img
          src={logo}
          alt="L&L Healthcare Logo"
          className="
            z-10 object-contain rounded-full
            w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72
          "
        />

      </div>
    </div>
  );
};

export default Loader;