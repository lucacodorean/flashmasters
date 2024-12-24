import "react";
import {useUser} from "../contexts/userContext";
import {useEffect} from "react";

const Dashboard = () => {

    const {user} = useUser();

    return (
        <div className="bg-purple-900 min-h-screen text-white">

            <div className="pt-8 pb-16 px-6 text-center">
                <div className="flex justify-center items-center mb-4">
                    <img
                        src="https://via.placeholder.com/50" // Replace with the user's profile image URL
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full border-2 border-white"
                    />
                </div>
                <h1 className="text-lg font-medium">Bine ai revenit,</h1>
                <h2 className="text-xl font-bold">{user.attributes.name}</h2>
            </div>

            <div className="-mt-12 px-6">
                <div className="bg-white text-black p-6 rounded-xl shadow-lg">
                    <h3 className="font-medium text-lg mb-2">Cauta un bundle</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Here"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute right-3 top-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35M10 6a4 4 0 100 8 4 4 0 000-8z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Flashcard Categories */}
            <div className="px-6 mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Flashcard Categories</h3>
                    <button className="text-purple-900 bg-white text-sm px-4 py-2 rounded-lg hover:bg-gray-100">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { name: "Matematica", icon: "📘" },
                        { name: "Chimie", icon: "⚗️" },
                        { name: "Business", icon: "💼" },
                        { name: "IT", icon: "💻" },
                        { name: "Literatura", icon: "📚" },
                        { name: "Limba spaniola", icon: "🗣️" },
                    ].map((category, index) => (
                        <div
                            key={index}
                            className="bg-white text-purple-900 flex flex-col items-center justify-center rounded-lg py-4 shadow-md hover:shadow-lg"
                        >
                            <span className="text-3xl mb-2">{category.icon}</span>
                            <p className="text-sm font-medium">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="fixed bottom-0 w-full bg-purple-900 py-3 px-8 flex justify-between items-center">
                <button className="text-white text-2xl focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h1M7 10h10M5 20h2"
                        />
                    </svg>
                </button>
                <button className="text-purple-900 bg-white rounded-full p-3 shadow-lg focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 5v.01M21 21l-9-9-5 5"
                        />
                    </svg>
                </button>
                <button className="text-white text-2xl focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 10h1M7 10h10M5 20h2"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
