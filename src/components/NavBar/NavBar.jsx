import React from "react";
import HomeButton from "../HomeButton/HomeButton.jsx";
import Bookmark from "../Bookmark/Bookmark.jsx";
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

  return (
    <div className={styles.navBar}>
      <div className={styles.icons}>
        <HomeButton className={styles.homeButton} onClick={handleClickHome} />
        <img
          src="src/assets/Home/Chat Message.png"
          alt="ChatMessage1347"
          className={styles.chatMessage}
        />
        <Bookmark className={styles.bookmarkButton} onClick={handleclickFavorites} />      
      </div>
    </div>
  );
};

export default NavBar;
