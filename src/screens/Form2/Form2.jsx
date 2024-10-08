import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form2.scss";
import axios from "axios";
import Spinner from "../../components/Spinner.jsx";
import ArrowButton from "../../components/ArrowButton/ArrowButton.jsx";

const MODEL_NAME = "gpt-4-1106-preview";

const Form2 = () => {
  const [bmi, setBmi] = useState("");
  const [medications, setMedications] = useState("");
  const [healthConditions, setHealthConditions] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [goal, setGoal] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const queryAPI = async (prompt) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: MODEL_NAME,
          messages: [
            {
              role: "system",
              content: "You are a health and nutrition coach.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (
        response.data &&
        response.data.choices &&
        response.data.choices[0].message &&
        response.data.choices[0].message.content
      ) {
        return response.data.choices[0].message.content.trim();
      } else {
        console.error("Unexpected response format:", response);
        return "Error: Unexpected response format.";
      }
    } catch (error) {
      console.error("Error querying the API:", error);
      return "Error querying the API.";
    }
  };

  const handleConvoClick = async (e) => {
    e.preventDefault();
    const prompt = `I have a BMI of ${bmi}, current medications: ${medications}, known health conditions: ${healthConditions}, and family health history: ${familyHistory}. My goal is ${goal}. I eat ${mealsPerDay} meals per day. How should I proceed?`;

    setIsLoading(true); // Show loading screen
    const responseText = await queryAPI(prompt);
    setIsLoading(false); // Hide loading screen

    navigate("/chatgpt-ai-healthapp/conversation", { state: { responseText } });
  };

  return (
    <div className="" role="main">
      {isLoading ? (
        <Spinner />
      ) : (
        <form
          onSubmit={handleConvoClick}
          role="form"
          aria-labelledby="form-title"
        >
          <h1 id="form-title" className="text-white">
            Your Health Information
          </h1>
          <div className="mb-3">
            <label htmlFor="bmi" className="form-label text-white">
              BMI:
            </label>
            <input
              type="text"
              className="form-control"
              id="bmi"
              name="bmi"
              value={bmi}
              onChange={handleInputChange(setBmi)}
              aria-label="Enter your BMI"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medications" className="form-label text-white">
              Current Medications:
            </label>
            <textarea
              className="form-control"
              id="medications"
              name="medications"
              value={medications}
              onChange={handleInputChange(setMedications)}
              rows="3"
              aria-label="Enter your current medications"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="healthConditions" className="form-label text-white">
              Known Health Conditions:
            </label>
            <textarea
              className="form-control"
              id="healthConditions"
              name="healthConditions"
              value={healthConditions}
              onChange={handleInputChange(setHealthConditions)}
              rows="3"
              aria-label="Enter your known health conditions"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="familyHistory" className="form-label text-white">
              Family Health History:
            </label>
            <textarea
              className="form-control"
              id="familyHistory"
              name="familyHistory"
              value={familyHistory}
              onChange={handleInputChange(setFamilyHistory)}
              rows="3"
              aria-label="Enter your family health history"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mealsPerDay" className="form-label text-white">
              How Many Meals Do You Eat Per Day?
            </label>
            <select
              id="mealsPerDay"
              name="mealsPerDay"
              className="form-select"
              value={mealsPerDay}
              onChange={handleInputChange(setMealsPerDay)}
              aria-label="Select how many meals you eat per day"
            >
              <option value="">Select an option</option>
              <option value="0-1">0-1</option>
              <option value="1-3">1-3</option>
              <option value="I prefer small snacks throughout the day">
                I prefer small snacks throughout the day
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="goal" className="form-label text-white">
              Goals:
            </label>
            <select
              id="goal"
              name="goal"
              className="form-select"
              value={goal}
              onChange={handleInputChange(setGoal)}
              aria-label="Select your goal"
            >
              <option value="">Select your goal</option>
              <option value="Lose 5lbs">Lose 5lbs</option>
              <option value="Lose 10lbs">Lose 10lbs</option>
              <option value="Lose 15lbs">Lose 15lbs</option>
              <option value="Lose 20lbs">Lose 20lbs</option>
              <option value="Maintain current weight">
                Maintain current weight
              </option>
            </select>
          </div>
          {errorMessage && (
            <div className="text-danger mb-3">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            aria-label="Submit your information"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form2;
