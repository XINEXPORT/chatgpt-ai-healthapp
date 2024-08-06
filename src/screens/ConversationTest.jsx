import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryContext } from '../App';
import '../index.scss';
import { Helmet } from 'react-helmet';
import styles from './ConversationTest.module.scss';
import ChatBubble from '../components/ChatBubble/ChatBubble.jsx';
import CustomTextarea from '../components/CustomTextarea/CustomTextarea.jsx';
import SmallSpinner from '../components/SmallSpinner/SmallSpinner.jsx';

const ConversationTest = () => {
    const location = useLocation();
    const { queryResponse, setQueryResponse } = useQueryContext();
    const [chatHistory, setChatHistory] = useState(location.state?.chatHistory || []);
    const chatHistoryRef = useRef(null);

    useEffect(() => {
        if (queryResponse) {
            setChatHistory((prevHistory) => {
                // Check if the response already exists to prevent duplication
                const lastMessage = prevHistory[prevHistory.length - 1];
                if (lastMessage && lastMessage.message === queryResponse && !lastMessage.isUser) {
                    return prevHistory; // Do not update if the last message is the same response
                }
                return [...prevHistory, { message: queryResponse, isUser: false }];
            });
            setQueryResponse(''); // Reset queryResponse to prevent duplicate handling
        }
    }, [queryResponse, setQueryResponse]);


    useEffect(() => {
        chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }, [chatHistory]);

    const handleUserMessage = (userMessage) => {
        setChatHistory((prevHistory) => [...prevHistory, { message: userMessage, isUser: true }]);
    };

    return (
        <div className={styles.ConversationTest}>
            <Helmet>
                <title>exported project</title>
            </Helmet>
            <div className={styles.chatContainer}>
                <h1 className={styles.header}>Conversation</h1>
                <div className={styles.chatHistory} ref={chatHistoryRef}>
                    {chatHistory.map((chat, index) => (
                        <ChatBubble key={index} message={chat.message} isUser={chat.isUser} />
                    ))}
                </div>
                <div className={styles.messageBox}>
                    <CustomTextarea
                        handleUserMessage={handleUserMessage}
                        setQueryResponse={setQueryResponse}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConversationTest;

