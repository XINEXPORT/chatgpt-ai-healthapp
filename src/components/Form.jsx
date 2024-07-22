import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";

const API_URL = "https://api-inference.huggingface.co/models/openai-community/gpt2";
const API_KEY = process.env.VITE_API_TOKEN;

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAge(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Age cannot be negative.");
    }
  };
  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setWeight(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Weight cannot be negative.");
    }
  };
  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleEthnicityChange = (e) => setEthnicity(e.target.value);

  const queryAPI = async (prompt) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          inputs: prompt,
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data && data.length > 0 && data[0].generated_text) {
        return data[0].generated_text.trim();
      } else {
        console.error("Unexpected response format:", data);
        return "Error: Unexpected response format.";
      }
    } catch (error) {
      console.error("Error querying the API:", error);
      return "Error querying the API.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (age < 0 || weight < 0) {
      setErrorMessage("Age and weight cannot be negative.");
      return;
    }
    const prompt = `Provide weight loss tips for a person with the following details:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nWeight: ${weight}\nGoal: ${goal}\nEthnicity: ${ethnicity}`;
    const responseText = await queryAPI(prompt);
    navigate("/chatgpt-ai-healthapp/conversation", { state: { responseText } });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label text-white">First Name:</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label text-white">Last Name:</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label text-white">Age:</label>
          <input type="number" className="form-control" id="age" name="age" value={age} onChange={handleAgeChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label text-white">Weight:</label>
          <input type="number" className="form-control" id="weight" name="weight" value={weight} onChange={handleWeightChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="goal" className="form-label text-white">Goal:</label>
          <select id="goal" name="goal" className="form-select" value={goal} onChange={handleGoalChange}>
            <option value="">Select your goal</option>
            <option value="Lose 5lbs">Lose 5lbs</option>
            <option value="Lose 10lbs">Lose 10lbs</option>
            <option value="Lose 15lbs">Lose 15lbs</option>
            <option value="Lose 20lbs">Lose 20lbs</option>
            <option value="Maintain current weight">Maintain current weight</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="ethnicity" className="form-label text-white">Ethnicity:</label>
          <select id="ethnicity" name="ethnicity" className="form-select" value={ethnicity} onChange={handleEthnicityChange}>
            <option value="">Select your ethnicity</option>
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
        {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;
