import "react";
import { useState } from "react";
import api from "../utils/api.jsx";
import { useUser } from "../contexts/userContext.tsx";
import { mapToUserModel } from "../models/user";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const { setUser } = useUser();

    const register = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirmation) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await api.post("/api/auth/register", {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
                role_id: "rol_TBzuRQiUjMZGE22gJIFs"
            });

            const data = response.data;

            if (response.status === 400) {
                alert("Invalid registration details");
                return;
            }

            const mappedUser = mapToUserModel(data);
            setUser(mappedUser);

            if (mappedUser) {
                sessionStorage.setItem("user", JSON.stringify(mappedUser));
                window.location.href = "/dashboard";
            }
        } catch (e) {
            console.error(e);
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center mt-[10vh] md:mt-[33vh] max-w-screen-xl mx-auto p-8 text-center">
            <form className="bg-white rounded-xl w-[90%] max-w-md" onSubmit={register}>
                <h1 className="text-center text-3xl font-semibold text-gray-800 w-[10%] mb-7">Aventura începe
                    aici...</h1>
                <br/>
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-left">Register</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Cum te numești?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Introdu adresa ta de e-mail."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <input
                        type="password"
                        placeholder="Introdu o parolă pentru contul tău."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <input
                        type="password"
                        placeholder="Confirmă parola introdusă."
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <button className="w-full bg-purple-800 text-white py-3 rounded-lg font-medium hover:bg-purple-900">
                    Register
                </button>

                <div className="text-center mt-4 text-sm text-gray-500">
                    Ai deja un cont?{" "}
                    <a href="/login" className="text-purple-600 font-medium hover:underline">Conectează-te</a>
                </div>
            </form>
        </div>
    );
};

export default Register;
