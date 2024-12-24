import {React, useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from "../components/Spinner.jsx";

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
               setIsAuthenticated(sessionStorage.getItem('user') != null);
            } catch (e) {
                console.log(e);
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if(isAuthenticated === null) return (<Spinner/>)
    console.log(isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
