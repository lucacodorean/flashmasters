import './styles/App.css'
import Login from "./pages/Login.jsx";
import {Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Layout from "./components/Layout.jsx";
import AuthRedirect from "./routes/AuthRedirect.jsx";

export default function App() {
    return (
        <Routes>
            {/*<Route element={<Layout/>}>*/}
                <Route path="/login" element={<AuthRedirect><Login/></AuthRedirect>}/>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            {/*</Route>*/}

            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
};
