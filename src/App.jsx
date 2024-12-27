import './styles/App.css'
import Login from "./pages/Login.jsx";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import BundleDetails from "./pages/BundleDetails.jsx";
import Error from "./pages/Error.jsx";
import AuthRedirect from "./routes/AuthRedirect.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import Bundle from "./pages/Bundle.jsx";
import HomePage from "./pages/Homepage.jsx";

export default function App() {
    return (
        <Routes>
                <Route path="/register"             element={<AuthRedirect><Register/></AuthRedirect>}/>
                <Route path="/login"                element={<AuthRedirect><Login/></AuthRedirect>}/>
                <Route path="/dashboard"            element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="/profile"              element={<PrivateRoute><Profile/></PrivateRoute>}/>
                <Route path="/bundle/:id/buy"       element={<PrivateRoute><BundleDetails/></PrivateRoute>}/>
                <Route path="/bundle/:id/view"      element={<PrivateRoute><Bundle/></PrivateRoute>}/>

                <Route path="/"                     element={<HomePage/>}/>
                <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
                <Route path="/error"                element={<Error/>}/>
                <Route path="*"                     element={<NotFound/>}/>
        </Routes>
    )
};
