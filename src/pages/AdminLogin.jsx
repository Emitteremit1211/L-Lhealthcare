import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AdminLogin = () => {
    const navigate = useNavigate();

    const ADMIN_CREDENTIALS = {
        username: "admin",
        password: "123456",
    };

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const isLoggedIn =
            localStorage.getItem("adminLoggedIn") === "true";

        if (isLoggedIn) {
            navigate("/adminpanel", { replace: true });
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData;

        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);
        setError("");

        setTimeout(() => {
            if (
                username === ADMIN_CREDENTIALS.username &&
                password === ADMIN_CREDENTIALS.password
            ) {
                localStorage.setItem("adminLoggedIn", "true");
                navigate("/adminpanel", { replace: true });
            } else {
                setError("Invalid username or password");
            }

            setLoading(false);
        }, 600);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2b46] via-[#1B3A5C] to-[#0a1f33] px-4">

            {/* BACK BUTTON */}
            <button
                onClick={() => navigate("/")}
                className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition z-20"
            >
                <ArrowLeft size={20} />
                Return to website
            </button>

            {/* DECORATIVE BACKGROUND BLURS */}
            <div className="absolute w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-cyan-300 opacity-20 rounded-full blur-3xl bottom-10 right-10"></div>

            <div className="relative z-10 w-full max-w-md">

                <div className="
        bg-white/10 
        backdrop-blur-2xl 
        border border-white/20 
        shadow-[0_25px_80px_rgba(0,0,0,0.5)]
        rounded-2xl 
        p-8
    ">

                    <h1 className="text-3xl font-bold text-white text-center mb-6">
                        Admin Login
                    </h1>

                    <form className="space-y-5" onSubmit={handleSubmit}>

                        <div>
                            <label className="block mb-2 font-medium text-white/80">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter username"
                                className="
                        w-full 
                        bg-white/10 
                        border border-white/20 
                        text-white 
                        placeholder-white/50
                        p-3 
                        rounded-lg 
                        outline-none 
                        focus:ring-2 
                        focus:ring-white/40
                        backdrop-blur-md
                    "
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium text-white/80">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                className="
                        w-full 
                        bg-white/10 
                        border border-white/20 
                        text-white 
                        placeholder-white/50
                        p-3 
                        rounded-lg 
                        outline-none 
                        focus:ring-2 
                        focus:ring-white/40
                        backdrop-blur-md
                    "
                            />
                        </div>

                        {error && (
                            <p className="text-red-300 text-sm font-medium">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                    w-full 
                    bg-[#1B3A5C]
                    text-white 
                    py-3 
                    rounded-lg 
                    hover:bg-[#2A9D8F]
                    transition 
                    shadow-lg
                    backdrop-blur-md
                "
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;