import React from "react";
import HomeButton from "../HomeButton/HomeButton.jsx";
import Bookmark from "../Bookmark/Bookmark.jsx";
import ConversationIcon from "../ConversationIcon/ConversationIcon.jsx";
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/chatgpt-ai-healthapp/home");
  };

  const handleclickFavorites = ()=>{
    navigate("/chatgpt-ai-healthapp/favorites");
  }

  const handleclickConversation = ()=>{
    navigate("/chatgpt-ai-healthapp/conversation");
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.icons}>
        <HomeButton className={styles.homeButton} onClick={handleClickHome} />
        <ConversationIcon onClick={handleclickConversation} />
        <Bookmark className={styles.bookmarkButton} onClick={handleclickFavorites} />      
      </div>
    </div>
  );
};

export default NavBar;
