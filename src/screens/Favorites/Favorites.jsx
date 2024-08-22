import React, { useState, useEffect } from "react";
import axios from "axios";
import { usePatientInfoContext } from "../../PatientInfoContext";
import "./Favorites.scss";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const { patientInfo } = usePatientInfoContext();

  const patientName = patientInfo?.name || "Guest";
  const firstName = patientName.split(" ")[0]; // Get the first name

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("/chatgpt-ai-healthapp/api/favorite");

        if (Array.isArray(response.data)) {
          setFavorites(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
          setError("Invalid data format received from server.");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setError("Failed to fetch favorites. Please try again later.");
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      <div className="profile-section"></div>
      <div className="favorites">
        <h2>{firstName}'s Favorites</h2>
        {error && <div className="error-message">{error}</div>}
        <ul className="favorite-list">
          {Array.isArray(favorites) ? (
            favorites.map((item, index) => (
              <li key={index}>
                <span>{item.title}</span>
              </li>
            ))
          ) : (
            <li>No favorites available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
