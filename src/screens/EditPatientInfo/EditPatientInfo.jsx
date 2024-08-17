import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePatientInfoContext } from "../../PatientInfoContext";
import styles from "./EditPatientInfo.module.scss"; // Create this stylesheet

const EditPatientInfo = () => {
  const { patientInfo, setPatientInfo } = usePatientInfoContext();
  const [formData, setFormData] = useState(patientInfo);
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(patientInfo); // Populate form data with existing patient info
  }, [patientInfo]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatientInfo(formData); // Update patient info context
  };

  return (
    <div className={styles.editInformation}>
      <h1 className={styles.header}>Edit Your Information</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={formData.age || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            value={formData.weight || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={formData.height || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ethnicity">Ethnicity:</label>
          <select
            id="ethnicity"
            value={formData.ethnicity || ""}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="Indigenous American/Native Alaskan">Indigenous American/Native Alaskan</option>
            <option value="Black African">Black African</option>
            <option value="Black or African American">Black or African American</option>
            <option value="East Asian">East Asian</option>
            <option value="Southeast Asian">Southeast Asian</option>
            <option value="South Asian">South Asian</option>
            <option value="Native Hawaiian or Pacific Islander">Native Hawaiian or Pacific Islander</option>
            <option value="Latine/Hispanic/Latinx or Spanish origin">Latine/Hispanic/Latinx or Spanish origin</option>
            <option value="Middle Eastern or North African">Middle Eastern or North African</option>
            <option value="White or European Descent">White or European Descent</option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Prefer to describe">Prefer to describe</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="medications">Current Medications:</label>
          <input
            type="text"
            id="medications"
            value={formData.medications || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="health conditions">Current Health Conditions:</label>
          <input
            type="text"
            id="healthConditions"
            value={formData.healthConditions || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="health history">Family Health History:</label>
          <input
            type="text"
            id="healthHistory"
            value={formData.healthHistory || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mealsPerDay">Meals Per Day:</label>
          <select
            id="mealsPerDay"
            value={formData.mealsPerDay || ""}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="0-1">0-1</option>
            <option value="1-3">1-3</option>
            <option value="4+">4+</option>
            <option value="Prefer small snacks throughout the day">Prefer small snacks throughout the day</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="healthGoals">Current Health Goals:</label>
          <input
            type="text"
            id="healthGoals"
            value={formData.healthGoals || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPatientInfo;