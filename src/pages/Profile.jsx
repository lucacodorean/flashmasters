import "react";
import Footer from "../components/Footer.jsx";
import Divider from "../components/Divider.jsx";
import {useUser} from "../contexts/userContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../utils/api.jsx";
import {mapToUserModel} from "../models/user";

const Profile = () => {

    const {user, setUser} = useUser();
    const [availableMaterialTime, setAvailableMaterialTime] = useState(0);
    const navigate = useNavigate();

    const logOut = () => {
        sessionStorage.clear();
        window.location.href = "/login";
    };

    const redirectTermsAndConditions = () => {
        window.location.href = "/terms-and-conditions";
    };

    const redirectBillingPortal = async () => {
        try {
            const response = await api.get(`/api/v1/users/${user.id}/billing`);

            if(response.status === 200) {
                window.location.href = response.data.redirect_link;
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const determineAvailableMaterialTime = () => {
            user.relationships.bundles.map(bundle => {
                setAvailableMaterialTime(availableMaterialTime + bundle.attributes.hours);
            });
        };

        const fetchUser = async () => {
            try {
                const response = await api.get(`/api/v1/users/${user.id}`);
                if(response.status === 200) {
                    const mappedUser = mapToUserModel(response.data);
                    setUser(mappedUser)
                }
            } catch (e) { console.log(e); }
        };

        fetchUser();
        determineAvailableMaterialTime();
    }, []);

    return (
        <div className="bg-purple-900 h-64 text-white"
             style={{borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px"}}>

            <div className="relative">
                <div className="absolute left-4 top-4">
                    <button className="text-white text-2xl" onClick={() => navigate(-1)}>&#8249;</button>
                </div>
                <div className="flex flex-col items-center pt-12">
                    <img src={user.attributes.avatar ? user.attributes.avatar : "../../public/vite.svg"}
                         className="w-24 h-24 rounded-full border-1 shadow-xl border-white" alt={"Avatar"}/>
                    <h1 className="mt-4 text-xl font-semibold">{user.attributes.name}</h1>
                    <h1 className="text-gray-300">{user.relationships.role.name}</h1>
                </div>
                <br/>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-4 flex justify-around items-center max-w-max mx-auto mt-5">
                <div className="flex items-center space-x-2">
                    <div className="bg-wgite text-white p-2 rounded-full">
                        <svg width="16" height="23" viewBox="0 0 16 23" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.80883 22.9343C3.64073 22.8633 3.50104 22.7384 3.4118 22.5793C3.32256 22.4201 3.28884 22.2358 3.31598 22.0554L4.81096 12.3216H0.84351C0.71773 12.3249 0.592854 12.2994 0.478517 12.2469C0.364179 12.1943 0.263437 12.1163 0.184063 12.0186C0.104688 11.921 0.0488034 11.8064 0.0207204 11.6838C-0.00736267 11.5611 -0.00689329 11.4337 0.0220921 11.3112L2.48635 0.632785C2.52971 0.44901 2.63506 0.285784 2.78467 0.170585C2.93428 0.0553855 3.11901 -0.00475269 3.30776 0.000293584H11.5219C11.6447 -0.000123673 11.7659 0.0269598 11.8768 0.0795541C11.9877 0.132148 12.0853 0.208917 12.1627 0.304218C12.2411 0.400596 12.2966 0.513504 12.325 0.634442C12.3535 0.75538 12.3541 0.881197 12.3269 1.00242L10.9059 7.39306H14.8076C14.9616 7.39275 15.1125 7.43571 15.2432 7.51704C15.3739 7.59838 15.4792 7.7148 15.5469 7.85305C15.6058 7.98574 15.6284 8.13166 15.6125 8.27595C15.5967 8.42024 15.5428 8.55775 15.4565 8.67447L4.7781 22.6386C4.70593 22.7456 4.60957 22.834 4.49683 22.8968C4.38409 22.9596 4.25813 22.995 4.12918 23C4.01927 22.9979 3.91067 22.9757 3.80883 22.9343Z"
                                fill="#4A0E5C"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-purple-800">{user.relationships.bundles.length}</p>
                        <p className="text-sm text-gray-500">Bundle-uri deținute</p>
                    </div>
                </div>

                <div className="h-12 border-l border-gray-300 ml-4"></div>

                <div className="flex items-center space-x-2">
                    <div className="bg-white text-white p-2 rounded-full">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.5 0C5.14933 0 0 5.14933 0 11.5C0 17.8507 5.14933 23 11.5 23C17.8507 23 23 17.8507 23 11.5C23 5.14933 17.8507 0 11.5 0ZM16.0307 15.0347L15.2965 16.0358C15.2806 16.0576 15.2605 16.0761 15.2373 16.0901C15.2142 16.1041 15.1886 16.1133 15.1619 16.1174C15.1351 16.1215 15.1079 16.1202 15.0817 16.1137C15.0554 16.1072 15.0308 16.0955 15.009 16.0795L10.7633 12.9837C10.7368 12.9647 10.7153 12.9396 10.7006 12.9106C10.6858 12.8816 10.6783 12.8494 10.6786 12.8169V5.75C10.6786 5.63705 10.771 5.54464 10.8839 5.54464H12.1186C12.2316 5.54464 12.324 5.63705 12.324 5.75V12.1032L15.9845 14.7498C16.0769 14.814 16.0974 14.9423 16.0307 15.0347Z"
                                fill="#4A0E5C"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-purple-800">{availableMaterialTime}+</p>
                        <p className="text-sm text-gray-500">Ore în aplicație</p>
                    </div>
                </div>
            </div>

            <div className="bg-white text-purple-800 mt-12 mx-4">
                <div className="bg-white rounded-xl shadow-md p-4">

                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-purple-800">About You</h3>
                        <button className="text-purple-600 hover:text-purple-800">
                            {/*<svg width="17" height="17" viewBox="0 0 17 17" fill="none"*/}
                            {/*     xmlns="http://www.w3.org/2000/svg">*/}
                            {/*    <path*/}
                            {/*        d="M12.0066 3.12457L13.8754 4.99254L12.0066 3.12457ZM13.2083 1.47897L8.15505 6.53226C7.89395 6.79299 7.71588 7.12519 7.64328 7.48697L7.17651 9.82347L9.51301 9.35582C9.87478 9.28346 10.2065 9.10611 10.4677 8.84493L15.521 3.79164C15.6729 3.63979 15.7933 3.45951 15.8755 3.26111C15.9577 3.0627 16 2.85006 16 2.63531C16 2.42055 15.9577 2.20791 15.8755 2.0095C15.7933 1.8111 15.6729 1.63082 15.521 1.47897C15.3692 1.32712 15.1889 1.20666 14.9905 1.12448C14.7921 1.0423 14.5794 1 14.3647 1C14.1499 1 13.9373 1.0423 13.7389 1.12448C13.5405 1.20666 13.3602 1.32712 13.2083 1.47897V1.47897Z"*/}
                            {/*        stroke="#4A0E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                            {/*    <path*/}
                            {/*        d="M14.2354 11.5882V14.2353C14.2354 14.7033 14.0495 15.1522 13.7186 15.4831C13.3876 15.8141 12.9387 16 12.4707 16H2.76472C2.29669 16 1.84783 15.8141 1.51688 15.4831C1.18593 15.1522 1 14.7033 1 14.2353V4.52931C1 4.06128 1.18593 3.61241 1.51688 3.28146C1.84783 2.95051 2.29669 2.76459 2.76472 2.76459H5.41181"*/}
                            {/*        stroke="#4A0E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>*/}
                            {/*</svg>*/}
                        </button>
                    </div>

                    <Divider/>

                    <p className="text-sm text-gray-700">{user.attributes.description}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 mt-10 mx-4">
                <h3 className="text-lg font-semibold text-purple-800">Meniu</h3>
                <Divider/>
                <button onClick={() => redirectBillingPortal()} className="w-full text-left text-purple-600 hover:text-purple-800 mb-2">Modifică-ți profilul de plată</button>
                <button onClick={() => redirectTermsAndConditions()} className="w-full text-left text-purple-600 hover:text-purple-800 mb-2">Termenii și condițiile</button>
                <button onClick={() => logOut()} className="w-full text-left text-red-600 hover:text-red-800 mb-2">Log-out</button>
            </div>

            <Footer/>
        </div>
    );
};

export default Profile;