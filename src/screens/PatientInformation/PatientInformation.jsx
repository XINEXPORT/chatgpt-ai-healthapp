import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questionsConfig"; // Import the questions from the configuration file
import { usePatientInfoContext } from "../../PatientInfoContext";;
import ChatBubble from "../../components/ChatBubble/ChatBubble.jsx"; // Import your ChatBubble component
import ArrowButton from "../../components/ArrowButton/ArrowButton.jsx";
import CustomTextarea from "../../components/CustomTextarea/CustomTextarea.jsx"; // Import your CustomTextarea component
import styles from './PatientInformation.module.scss'; // Import your styles


const PatientInformation = () => {
    const { patientInfo, setPatientInfo } = usePatientInfoContext();
    const [chatHistory, setChatHistory] = useState([{ message: questions[0].question, isUser: false }]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState(patientInfo);
    const chatContainerRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/chatgpt-ai-healthapp/home");
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setResponses((prevResponses) => ({ ...prevResponses, [id]: value }));
    };

    const handleNextClick = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const currentAnswer = responses[currentQuestion.id];

        if (currentAnswer) {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { message: currentAnswer, isUser: true },
            ]);

            setPatientInfo((prevInfo) => ({ ...prevInfo, [currentQuestion.id]: currentAnswer }));

            if (currentQuestionIndex < questions.length - 1) {
                const nextQuestion = questions[currentQuestionIndex + 1].question;
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { message: nextQuestion, isUser: false },
                ]);
            }

            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    useEffect(() => {
        console.log("Patient Info Updated: ", patientInfo);
    }, [patientInfo]);

    const renderInput = (question) => {
        if (question.type === "select") {
            return (
                <select
                    id={question.id}
                    className={styles.formSelect}
                    onChange={handleInputChange}
                    value={responses[question.id] || ""}
                >
                    <option value="">Select an option</option>
                    {question.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                type={question.type}
                id={question.id}
                className={styles.formControl}
                onChange={handleInputChange}
                value={responses[question.id] || ""}
            />
        );
    };

    return (
        <div className={styles.PatientInformation}>
            <div className={styles.chatContainer} ref={chatContainerRef}>
                {chatHistory.map((chat, index) => (
                    <ChatBubble key={index} message={chat.message} isUser={chat.isUser} />
                ))}
                {currentQuestionIndex < questions.length && (
                    <div className={styles.chatBubbleContainer}>
                        <div className={styles.inputContainer}>
                            {renderInput(questions[currentQuestionIndex])}
                            <button
                                type="button"
                                className={styles.submitButton}
                                onClick={handleNextClick}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.arrowButton}>
                    <ArrowButton onClick={handleClick}></ArrowButton>
                </div>
                <span className={styles.continueMessage}>
                    Continue to Home
                </span>
            </div>
        </div>
    );
};

export default PatientInformation;