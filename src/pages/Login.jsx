import "react";
import Divider from "../components/Divider.jsx";
import {useState} from "react";
import api from "../utils/api.jsx";
import {useUser} from "../contexts/userContext.tsx";
import {mapToUserModel} from "../models/user";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useUser();

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/api/auth/login", { email, password });
            const data = response.data;

            if(response.status === 401) {
                alert("Invalid email or password");
                return;
            }

            const mappedUser = mapToUserModel(data);
            setUser(mappedUser);

            if(user) {
                sessionStorage.setItem("user", JSON.stringify(mappedUser))
                window.location.href = "/dashboard";
            }
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <div className="flex justify-center items-center mt-[10vh] md:mt-[33vh]">
            <form className="bg-white rounded-xl w-[90%] max-w-md" onSubmit={login}>
                <h1 className="text-center text-3xl font-semibold text-gray-800 w-[10%] mb-7">Welcome to flashMasters</h1>
                <br/>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left">Login</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 15l4-4m0 0l-4-4m4 4H8"
                            />
                        </svg>
                    </div>
                </div>

                <button className="w-full bg-purple-800 text-white py-3 rounded-lg font-medium hover:bg-purple-900">
                    Sign In
                </button>

                <div className="text-center mt-4 text-sm text-gray-500">
                    Nu ai un cont?{" "}
                    <a href="#" className="text-purple-600 font-medium hover:underline">
                        Crează unul
                    </a>
                </div>

                <Divider/>

                <div className="space-y-4">
                    <button
                        className="flex justify-center bg-white text-black border border-gray-300 rounded-md py-2 w-full hover:bg-gray-100 focus:outline-none">
                        <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24 mr-5"
                             strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M17.788 5.108A9 9 0 1021 12h-8"/>
                        </svg>
                        Login with Google
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
