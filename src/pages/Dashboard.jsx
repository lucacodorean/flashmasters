import "react";
import Footer from "../components/Footer.jsx";
import BundleGrid from "../components/BundleGrid.jsx";
import {useUser} from "../contexts/userContext.tsx";

const Dashboard = () => {

    const {user} = useUser();

    return (
        <div className="bg-purple-900 h-60 text-white" style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>

            <div className="flex pt-16 pb-16 px-6">
                <div className="mb-4">
                    <img src={user.attributes.avatar ? user.attributes.avatar : "../../public/vite.svg"}
                         className="w-16 h-16 border-1 rounded-full shadow-xl border-white" alt={"Avatar"}/>
                </div>
                <div className="ml-3">
                    <p className="text-xl font-normal">Bine ai revenit, </p>
                    <p className="text-xl font-semibold">{user.attributes.name}</p>
                </div>
            </div>

            <div className="-mt-10 px-6">
                <div className="bg-white text-black p-6 rounded-xl shadow-lg">
                    <h3 className="font-medium text-lg mb-2">Cauta un bundle</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Nu ai găsit ce căutai? Caută bundle-ul după nume.

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

            <BundleGrid/>
            <Footer/>
        </div>
    );
};

export default Dashboard;
