import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryContext } from '../App';
import '../index.scss';
import { Helmet } from 'react-helmet';
import styles from './ConversationTest.module.scss';
import ChatBubble from '../components/ChatBubble/ChatBubble.jsx';
import CustomTextarea from '../components/CustomTextarea/CustomTextarea.jsx';
import axios from 'axios'; // Import axios

const ConversationTest = () => {
    const location = useLocation();
    const { queryResponse, setQueryResponse } = useQueryContext();
    const [chatHistory, setChatHistory] = useState(location.state?.chatHistory || []);
    const chatHistoryRef = useRef(null);

    useEffect(() => {
        if (queryResponse) {
            setChatHistory((prevHistory) => {
                const lastMessage = prevHistory[prevHistory.length - 1];
                if (lastMessage && lastMessage.message === queryResponse && !lastMessage.isUser) {
                    return prevHistory; // Prevent duplicate responses
                }
                const newChatHistory = [...prevHistory, { message: queryResponse, isUser: false, isBookmarked: false }];

                return newChatHistory;
            });
            setQueryResponse(''); // Reset queryResponse to prevent duplicate handling
        }
    }, [queryResponse, setQueryResponse]);

    useEffect(() => {
        chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }, [chatHistory]);

    const handleUserMessage = (userMessage) => {
        setChatHistory((prevHistory) => [...prevHistory, { message: userMessage, isUser: true, isBookmarked: false }]);
    };

    const toggleBookmark = (index) => {
        setChatHistory((prevHistory) =>
            prevHistory.map((chat, i) =>
                i === index ? { ...chat, isBookmarked: !chat.isBookmarked } : chat
            )
        );
    };

    const saveResponse = async (response) => {
        try {
            const result = await axios.post('/chatgpt-ai-healthapp/api/favorite', { title: response });

            if (result.status !== 200) {
                throw new Error('Failed to save response');
            }

            console.log('Response saved successfully');
        } catch (error) {
            console.error('Error saving response:', error);
        }
    };

    return (
        <div className={styles.ConversationTest}>
            <Helmet>
                <title>CareBuddy</title>
            </Helmet>
            <div className={styles.chatContainer}>
                <h1 className={styles.header}>Conversation</h1>
                <div className={styles.chatHistory} ref={chatHistoryRef}>
                    {chatHistory.map((chat, index) => (
                        <div key={index} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <ChatBubble
                                message={chat.message}
                                isUser={chat.isUser}
                                isBookmarked={chat.isBookmarked}
                                onBookmarkToggle={() => toggleBookmark(index)}
                            />
                            {!chat.isUser && (
                                <button
                                    className={styles.saveButton}
                                    onClick={() => saveResponse(chat.message)}
                                    style={{ marginLeft: '10px', cursor: 'pointer', padding: '5px 10px' }}
                                >
                                    Save
                                </button>
                            )}
                        </div>
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
