import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "./questionsConfig";
import { usePatientInfoContext } from "../../PatientInfoContext";
import ChatBubble from "../../components/ChatBubble/ChatBubble.jsx";
import ArrowButton from "../../components/ArrowButton/ArrowButton.jsx";
import Tutorial from "../TutorialTest/TutorialTest.jsx"; // Import the Tutorial component
import styles from './PatientInformation.module.scss';

const PatientInformation = () => {
    const { patientInfo, setPatientInfo } = usePatientInfoContext();
    const [chatHistory, setChatHistory] = useState([
        { message: "Hi there! I'm going to ask you a few questions to get to know you better.", isUser: false }
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [responses, setResponses] = useState({});
    const [questionsFinished, setQuestionsFinished] = useState(false);
    const [startTutorial, setStartTutorial] = useState(false); // New state to trigger tutorial
    const chatContainerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setResponses({});
    }, []);

    const handleClick = () => {
        navigate("/chatgpt-ai-healthapp/home")
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setResponses((prevResponses) => ({ ...prevResponses, [id]: value }));
    };

    const handleNextClick = () => {
        processAnswerAndMoveToNextQuestion();
    };

    const handleSkipClick = () => {
        processAnswerAndMoveToNextQuestion(true);
    };

    const processAnswerAndMoveToNextQuestion = (skip = false) => {
        if (currentQuestionIndex === -1) {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { message: questions[0].question, isUser: false }
            ]);
            setCurrentQuestionIndex(0);
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        const currentAnswer = skip ? "Skipped" : responses[currentQuestion.id];

        if (currentAnswer) {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { message: currentAnswer, isUser: true },
            ]);

            const updatedInfo = { ...patientInfo, [currentQuestion.id]: currentAnswer };

            if (updatedInfo.weight && updatedInfo.height) {
                const bmi = calculateBMI(updatedInfo.weight, updatedInfo.height);
                updatedInfo.bmi = bmi;
            }

            setPatientInfo(updatedInfo);

            if (currentQuestionIndex < questions.length - 1) {
                const nextQuestion = questions[currentQuestionIndex + 1].question;
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { message: nextQuestion, isUser: false },
                ]);
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentQuestionIndex(questions.length);
                setQuestionsFinished(true);
            }
        }
    };

    const calculateBMI = (weight, height) => {
        const weightInKg = convertPoundsToKg(weight);
        const heightInMeters = convertHeightToMeters(height);
        return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    };

    const convertPoundsToKg = (weight) => {
        return weight * 0.453592;
    };

    const convertHeightToMeters = (height) => {
        const regex = /^(\d+)'(\d+)?["']?$/;
        const match = height.match(regex);
        if (match) {
            const feet = parseInt(match[1], 10);
            const inches = match[2] ? parseInt(match[2], 10) : 0;
            const totalInches = (feet * 12) + inches;
            const heightInMeters = totalInches * 0.0254;
            return heightInMeters;
        } else {
            throw new Error("Invalid height format");
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
            {startTutorial && <Tutorial />} {/* Conditionally render the tutorial */}
            <div className={styles.chatContainer} ref={chatContainerRef}>
                {chatHistory.map((chat, index) => (
                    <ChatBubble key={index} message={chat.message} isUser={chat.isUser} />
                ))}
                {currentQuestionIndex < questions.length && (
                    <div className={styles.chatBubbleContainer}>
                        <div className={styles.inputContainer}>
                            {currentQuestionIndex >= 0 && renderInput(questions[currentQuestionIndex])}
                            <div className={styles.buttonsContainer}>
                                {currentQuestionIndex >= 6 && (
                                    <button
                                        type="button"
                                        className={styles.skipButton}
                                        onClick={handleSkipClick}
                                    >
                                        Skip
                                    </button>
                                )}
                                <button
                                    type="button"
                                    className={styles.submitButton}
                                    onClick={handleNextClick}
                                >
                                    {currentQuestionIndex === -1 ? "Start" : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {questionsFinished && (
                <div className={styles.buttonContainer}>
                    <div className={styles.arrowButton}>
                        <ArrowButton onClick={handleClick}></ArrowButton>
                    </div>
                    <span className={styles.continueMessage}>
                        Continue to Home
                    </span>
                </div>
            )}
        </div>
    );
};

export default PatientInformation;