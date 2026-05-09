import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // Check login status from localStorage
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

    // If not logged in → redirect to login page
    if (!isLoggedIn) {
        return <Navigate to="/adminlogin" replace />;
    }

    // If logged in → allow access
    return children;
};

export default ProtectedRoute;