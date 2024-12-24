import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();

    // List of routes where the footer should not be displayed
    const hideFooterRoutes = ["/login"];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Main content */}
            <div className="flex-grow">
                <Outlet />
            </div>

            {/* Conditionally render the footer */}
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
};

export default Layout;
