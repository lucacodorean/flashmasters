import "react";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../utils/api.jsx";
import {delay} from "../utils/delay.jsx";
import Spinner from "../components/Spinner.jsx";
import Divider from "../components/Divider.jsx";
import Footer from  "../components/Footer.jsx";

const BundleDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [bundle, setBundle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const fetchBundle = async () => {
            try {
                const response = await api.get(`/api/v1/bundles/${id}`);
                await delay(1000);

                if(response.status === 200) {
                    setBundle(response.data);
                    setCounter(response.data.relationships.questions.length + Math.floor(Math.random() * 10) + 1);
                }
            } catch (e) {
                console.error(e);
            } finally  { setLoading(false); }
        };

        fetchBundle();
    }, []);

    const buyBundle = async () => {
        try {
            const response = await api.post(`/api/v1/bundles/${id}/buy`);

            if(response.status === 200) {
                window.location.href = response.data.checkout_url;
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        loading ? <Spinner text = "Te rugăm să aștepți..." /> :
        <div>
            <div className="p-6 min-h-screen">
                <div className={"mb-4 flex items-center mt-12"}>
                    <button onClick={() => navigate("/dashboard")}
                            className="text-purple-900 ">
                        <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1.90515L1 9.8953L9 17.8854" stroke="#11144C" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <h1 className="text-xl font-semibold ml-6">{bundle.attributes.name}</h1>
                </div>

                <div className="text-center mb-6 mt-8">
                    <span className="text-7xl mb-2">{bundle.attributes.icon}</span>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md mt-9">
                    <h2 className="text-xl font-semibold text-purple-900 mb-4">De ce acest bundle?</h2>
                    <Divider/>
                    <p className="text-gray-600 mb-4 text-justify">{bundle.attributes.description}</p>
                    <p className="text-gray-800">
                        <b>Pret:</b> {bundle.attributes.price} RON
                    </p>

                    <div className="flex justify-between mt-6">
                        <div className="flex items-center space-x-2">
                            <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.80883 22.9343C3.64073 22.8633 3.50104 22.7384 3.4118 22.5793C3.32256 22.4201 3.28884 22.2358 3.31598 22.0554L4.81096 12.3216H0.84351C0.71773 12.3249 0.592854 12.2994 0.478517 12.2469C0.364179 12.1943 0.263437 12.1163 0.184063 12.0186C0.104688 11.921 0.0488034 11.8064 0.0207204 11.6838C-0.00736267 11.5611 -0.00689329 11.4337 0.0220921 11.3112L2.48635 0.632785C2.52971 0.44901 2.63506 0.285784 2.78467 0.170585C2.93428 0.0553855 3.11901 -0.00475269 3.30776 0.000293584H11.5219C11.6447 -0.000123673 11.7659 0.0269598 11.8768 0.0795541C11.9877 0.132148 12.0853 0.208917 12.1627 0.304218C12.2411 0.400596 12.2966 0.513504 12.325 0.634442C12.3535 0.75538 12.3541 0.881197 12.3269 1.00242L10.9059 7.39306H14.8076C14.9616 7.39275 15.1125 7.43571 15.2432 7.51704C15.3739 7.59838 15.4792 7.7148 15.5469 7.85305C15.6058 7.98574 15.6284 8.13166 15.6125 8.27595C15.5967 8.42024 15.5428 8.55775 15.4565 8.67447L4.7781 22.6386C4.70593 22.7456 4.60957 22.834 4.49683 22.8968C4.38409 22.9596 4.25813 22.995 4.12918 23C4.01927 22.9979 3.91067 22.9757 3.80883 22.9343Z"
                                    fill="#4A0E5C"/>
                            </svg>
                            <span className="text-purple-900 text-2xl font-bold">{counter}</span>
                            <p className="text-gray-600"> {counter > 10 ? "de" : ""} întrebări și carduri</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5 0C5.14933 0 0 5.14933 0 11.5C0 17.8507 5.14933 23 11.5 23C17.8507 23 23 17.8507 23 11.5C23 5.14933 17.8507 0 11.5 0ZM16.0307 15.0347L15.2965 16.0358C15.2806 16.0576 15.2605 16.0761 15.2373 16.0901C15.2142 16.1041 15.1886 16.1133 15.1619 16.1174C15.1351 16.1215 15.1079 16.1202 15.0817 16.1137C15.0554 16.1072 15.0308 16.0955 15.009 16.0795L10.7633 12.9837C10.7368 12.9647 10.7153 12.9396 10.7006 12.9106C10.6858 12.8816 10.6783 12.8494 10.6786 12.8169V5.75C10.6786 5.63705 10.771 5.54464 10.8839 5.54464H12.1186C12.2316 5.54464 12.324 5.63705 12.324 5.75V12.1032L15.9845 14.7498C16.0769 14.814 16.0974 14.9423 16.0307 15.0347Z"
                                    fill="#4A0E5C"/>
                            </svg>

                            <span className="text-purple-900 text-2xl font-bold">{bundle.attributes.hours}</span>
                            <p className="text-gray-600">{bundle.attributes.hours > 20 ? "de" : ""} ore</p>
                        </div>
                    </div>

                    <button className="w-full bg-purple-900 text-white py-3 rounded-lg mt-6 hover:bg-purple-800"
                            onClick={() => buyBundle()}>
                        Achiziționează acest bundle
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BundleDetails;
