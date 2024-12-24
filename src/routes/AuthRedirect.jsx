import "react";
import { Navigate } from "react-router-dom";

const RedirectIfAuthenticated = ({ children }) => {
    const isAuthenticated = !!sessionStorage.getItem("user");

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
};

export default RedirectIfAuthenticated;
