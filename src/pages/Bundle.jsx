import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { mapToBundleModel } from "../models/bundle";
import Footer from "../components/Footer.jsx";
import {mapToQuestionModel} from "../models/question";

const BundlePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [bundle, setBundle] = useState(null);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [question, setQuestion] = useState(null);
    const [questionCount, setQuestionCount] = useState(0);
    const [displayAnswer, setDisplayAnswer] = useState(false);

    useEffect(() => {
        const fetchBundle = async () => {
            try {
                const response = await api.get(`/api/v1/bundles/${id}`);

                if (response.status === 200) {
                    const data = mapToBundleModel(response.data);
                    setBundle(data);
                    setQuestionCount(data.relationships.questions.length);
                }
            } catch (error) {
                console.error("Error fetching bundle:", error);
            }
        };

        fetchBundle();

    }, [id]);

    if (!bundle) return <p>Loading...</p>;

    const currentQuestion = bundle.relationships.questions[currentCardIndex];

    const handleNextCard = () => {
        if (currentCardIndex < bundle.relationships.questions.length - 1) {
            setCurrentCardIndex((prevIndex) => prevIndex + 1);
            console.log(currentQuestion)
        }
    };

    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex((prevIndex) => prevIndex - 1);
        }
    };

    const exposeCard = async (questionId) => {
        try {

            const response = await api.get(`/api/v1/questions/${questionId}`);

            if(response.status === 200) {
                const data = mapToQuestionModel(response.data);
                setQuestion(data);
                console.log(data);
            }

            setShowExplanation(!showExplanation);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        questionCount > 0 ?
            <div>
                <div className="p-6 min-h-screen">
                    <div className={"mb-4 flex items-center mt-12"}>
                        <button onClick={() => navigate("/dashboard")}
                                className="text-purple-900 ">
                            <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.90515L1 9.8953L9 17.8854" stroke="#11144C" strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <h1 className="text-xl font-semibold ml-6">{bundle.attributes.name}</h1>
                    </div>


                    <div className="flex flex-col justify-center items-center px-6 py-4 swiper">
                        {!showExplanation ?
                            <div
                                className={`relative bg-purple-950 text-white rounded-xl w-80 h-96 flex flex-col items-center justify-center shadow-md overflow-y-scroll`}>
                                <h2 className="text-xl font-semibold text-center mb-10">{currentQuestion.attributes.text}</h2>
                                <ul>
                                    {Object.keys(currentQuestion.attributes.answers).map((key) => (
                                        <li className={"text-sm mb-2 justify-center"}
                                            key={key}>{`${key}. ${currentQuestion.attributes.answers[key]}`}</li>
                                    ))}
                                </ul>
                                <button
                                    className="absolute bottom-4 font-bold bg-purple-900 text-white p-2 rounded-full shadow-md"
                                    onClick={() => exposeCard(currentQuestion.id)}>
                                    &#x25BC;
                                </button>
                            </div> :
                            <div
                                className={`relative bg-purple-950 text-white rounded-xl w-80 h-96 flex flex-col items-center justify-center shadow-md overflow-y-scroll`}>
                                <h2 className="text-xl font-semibold text-center mb-10">Explicație</h2>
                                <ul className={"p-6"}>
                                    {question.relationships.cards.map((card) => (
                                        <li className={"text-sm mb-2 justify-center"}
                                            key={card.id}>{`${card.attributes.text}`}</li>
                                    ))}
                                </ul>
                                <button
                                    className="absolute bottom-4 font-bold bg-purple-900 text-white p-2 rounded-full shadow-md"
                                    onClick={() => setShowExplanation(!showExplanation)}>
                                    &#x25B2;
                                </button>
                            </div>}
                            <button
                                className="mt-4 font-bold bg-purple-900 text-white p-2 rounded-full shadow-md"
                                onClick={() => setDisplayAnswer(!displayAnswer)}>
                                Arată răspunsul
                            </button>


                        {displayAnswer && (
                            <div className="mt-4 relative bg-purple-950 text-white rounded-xl w-80 h-40 flex flex-col items-center justify-center shadow-md overflow-y-scroll">
                                <p>{currentQuestion.attributes.answers[currentQuestion.attributes.correct]}</p>
                            </div>
                        )}
                    </div>
                </div>



                <div className={"fixed w-full bottom-12 mb-6"}>
                    <div className="w-full px-6 mb-4 bottom-full">
                        <div className="flex justify-between text-sm text-gray-500">
                            <span
                                className={"text"}>{currentCardIndex + 1} / {bundle.relationships.questions.length}</span>
                        </div>
                        <div className="w-full bg-gray-300 rounded-full h-2 mt-1">
                            <div
                                className="bg-purple-700 h-2 rounded-full"
                                style={{
                                    width: `${
                                        ((currentCardIndex + 1) / bundle.relationships.questions.length) *
                                        100
                                    }%`,
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-6">
                        <button onClick={handlePreviousCard} disabled={currentCardIndex === 0 || showExplanation}
                                className={`py-2 px-4 rounded-lg ${
                                    currentCardIndex === 0 || showExplanation
                                        ? "bg-gray-300 text-gray-500"
                                        : "bg-purple-800 text-white hover:bg-purple-900"
                                }`}
                        >
                            Înapoi
                        </button>
                        <button onClick={handleNextCard}
                                disabled={currentCardIndex === bundle.relationships.questions.length - 1 || showExplanation}
                                className={`py-2 px-4 rounded-lg ${
                                    currentCardIndex === bundle.relationships.questions.length - 1 || showExplanation
                                        ? "bg-gray-300 text-gray-400"
                                        : "bg-purple-800 text-white hover:bg-purple-900"
                                }`}
                        >
                            Înainte
                        </button>
                    </div>
                </div>
                <Footer/>
            </div> :
            <div>
                <div className="p-6 min-h-screen">
                    <div className={"mb-4 flex items-center mt-12"}>
                        <button onClick={() => navigate("/dashboard")}
                                className="text-purple-900 ">
                            <svg width="10" height="19" viewBox="0 0 10 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1.90515L1 9.8953L9 17.8854" stroke="#11144C" strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <h1 className="text-xl font-semibold ml-6">Bundle în lucru! Încearcă mai târziu.</h1>
                    </div>
                </div>
                <Footer/>
            </div>
)};

export default BundlePage;
