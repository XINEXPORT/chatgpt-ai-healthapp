import React, { useState } from "react";
import axios from "axios";
import "./Favorites.scss";

const Favorites = ({name}) => {
    const favorites = [
      { title: 'Nutrition Basics', time: '08:30' },
      { title: 'Importance of Hydration', time: '09:45' },
      { title: 'Daily Exercise Routine', time: '11:00' },
      { title: 'Mental Health Awareness', time: '14:15' },
      { title: 'Sleep Hygiene Tips', time: '16:00' },
      { title: 'Stress Management Techniques', time: '18:30' },
      {title: 'Eating lean meals to create calorie deficit', time: '8:02'}
    ];
  
    return (
      <div >
        <div className="profile-section">
        </div>
        <div className="favorites">
          <h2>Christine's Favorites</h2>
          <ul className="favorite-list">
            {favorites.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Favorites;
