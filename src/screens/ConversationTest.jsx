import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryContext } from "../App";
import "../index.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styles from "./ConversationTest.module.scss";
import ChatBubble from "../components/ChatBubble/ChatBubble.jsx";
import CustomTextarea from "../components/CustomTextarea/CustomTextarea.jsx";
import axios from "axios";

const ConversationTest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { queryResponse, setQueryResponse } = useQueryContext();
  const chatHistoryRef = useRef(null);

  const initialChatHistory =
    JSON.parse(localStorage.getItem("chatHistory")) || [];
  const [chatHistory, setChatHistory] = useState(initialChatHistory);

  useEffect(() => {
    if (queryResponse) {
      setChatHistory((prevHistory) => {
        const lastMessage = prevHistory[prevHistory.length - 1];
        if (
          lastMessage &&
          lastMessage.message === queryResponse &&
          !lastMessage.isUser
        ) {
          return prevHistory;
        }
        return [...prevHistory, { message: queryResponse, isUser: false }];
      });
      setQueryResponse("");
    }
  }, [queryResponse, setQueryResponse]);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  useEffect(() => {
    chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
  }, [chatHistory]);

  const handleUserMessage = (userMessage) => {
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { message: userMessage, isUser: true },
    ]);
  };

  const toggleBookmark = (index) => {
    setChatHistory((prevHistory) =>
      prevHistory.map((chat, i) =>
        i === index ? { ...chat, isBookmarked: !chat.isBookmarked } : chat,
      ),
    );
  };

  const saveResponse = async (response) => {
    try {
      const result = await axios.post("/chatgpt-ai-healthapp/api/favorite", {
        title: response,
      });

      if (result.status !== 200) {
        throw new Error("Failed to save response");
      }

      console.log("Response saved successfully");
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  return (
    <HelmetProvider>
      <div className={styles.ConversationTest}>
        <Helmet>
          <title>CareBuddy - Conversation</title>
        </Helmet>
        <div className={styles.chatContainer}>
          <h1 className={styles.header}>Conversation</h1>
          <div className={styles.chatHistory} ref={chatHistoryRef}>
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
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
                    style={{
                      marginLeft: "10px",
                      cursor: "pointer",
                      padding: "5px 10px",
                    }}
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
              chatHistory={chatHistory}
              navigate={navigate}
            />
          </div>
        </div>
        <div className={styles.baymaxBlinking}>
          <img
            src="src/assets/baymax/baymax-blinking.gif"
            alt="baymax blinking gif"
          ></img>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default ConversationTest;
