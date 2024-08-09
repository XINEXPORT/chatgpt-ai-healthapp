import React from "react";
import HomeButton from "../HomeButton/HomeButton.jsx";
import Bookmark from "../Bookmark/Bookmark.jsx";
import ConversationIcon from "../ConversationIcon/ConversationIcon.jsx";
import styles from "./NavBar.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickHome = () => {
    navigate("/chatgpt-ai-healthapp/home");
  };

  const handleClickFavorites = () => {
    navigate("/chatgpt-ai-healthapp/favorites");
  };

  const handleClickConversation = () => {
    navigate("/chatgpt-ai-healthapp/conversation");
  };

  const handleClickEditForm = () => {
    navigate("/chatgpt-ai-healthapp/edit-patient-info");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.icons}>
        <img
          src={isActive("/chatgpt-ai-healthapp/home") ? "src/assets/NavBar/activeHomeIcon.png" : "src/assets/NavBar/inactiveHomeIcon.png"}
          className={`${styles.icon} ${isActive("/chatgpt-ai-healthapp/home") ? styles.active : styles.inactive}`}
          onClick={handleClickHome}
          alt="Home"
        />
        <img
          src={isActive("/chatgpt-ai-healthapp/conversation") ? "src/assets/NavBar/activeConversationIcon.png" : "src/assets/NavBar/inactiveConversationIcon.png"}
          className={`${styles.icon} ${isActive("/chatgpt-ai-healthapp/conversation") ? styles.active : styles.inactive} ${styles.conversationIcon}`}
          onClick={handleClickConversation}
          alt="Conversation"
        />
        <img
          src={isActive("/chatgpt-ai-healthapp/favorites") ? "src/assets/NavBar/activeBookmarkIcon.png" : "src/assets/NavBar/inactiveBookmarkIcon.png"}
          className={`${styles.icon} ${isActive("/chatgpt-ai-healthapp/favorites") ? styles.active : styles.inactive}`}
          onClick={handleClickFavorites}
          alt="Favorites"
        />
        <img
          src={isActive("/chatgpt-ai-healthapp/edit-patient-info") ? "src/assets/NavBar/activeEditFormIcon.png" : "src/assets/NavBar/inactiveEditFormIcon.png"}
          className={`${styles.icon} ${isActive("/chatgpt-ai-healthapp/favorites") ? styles.active : styles.inactive}`}
          onClick={handleClickEditForm}
          alt="Favorites"
        />
      </div>
    </div>
  );
};

export default NavBar;
