import React from 'react'
import HomeButton from '../HomeButton/HomeButton.jsx';
import styles from './NavBar.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/chatgpt-ai-healthapp/home');
      };
    
    return (
        <div className={styles.navBar}>
            <div className={styles.icons}>
                <img
                    src="src/assets/Home/Bookmark.png"
                    alt="Bookmark1240"
                    className={styles.bookmark}
                />
                <img
                    src="src/assets/Home/Settings.png"
                    alt="Settings1241"
                    className={styles.settings}
                />
                <img
                    src="src/assets/Home/Chat Message.png"
                    alt="ChatMessage1347"
                    className={styles.chatMessage}
                />
                <HomeButton className={styles.homeButton} onClick={handleClickHome} />
            </div>
        </div>
    );
};

export default NavBar;