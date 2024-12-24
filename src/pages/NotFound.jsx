import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-7xl font-bold mb-4">404 :(</h1>
                <p className="text-lg mb-12">Pagina pe care încerci să o accesezi nu există!</p>
                <Link to="/dashboard"
                    className="px-6 py-2 text-sm font-medium text-white bg-purple-800 rounded-full hover:bg-purple-900 transition">
                    Înapoi la meniul principal
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
