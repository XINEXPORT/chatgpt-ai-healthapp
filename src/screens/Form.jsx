import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.scss";
import axios from "axios";
import ArrowButton from "../components/ArrowButton/ArrowButton";

const MODEL_NAME = "gpt-4-1106-preview";

const Form = () => {
  const [name, setName] = useState(""); // Combined name state
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

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

  const handleHeightChange = (e) => {
    const value = e.target.value;
    if (value) {
      setHeight(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Height cannot be empty.");
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    navigate("/chatgpt-ai-healthapp/form2");
  };

  return (
    <div className="form-container" role="main">
      <form role="form" aria-labelledby="form-title">
        <h1 id="form-title" className="text-white">
          Personal Information Form
        </h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            aria-label="Enter your full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label text-white">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={age}
            onChange={handleAgeChange}
            aria-label="Enter your age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label text-white">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            aria-label="Select your gender"
          >
            <option value="">Select your gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label text-white">
            Weight:
          </label>
          <input
            type="number"
            className="form-control"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
            aria-label="Enter your weight"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="height" className="form-label text-white">
            Height in ft:
          </label>
          <input
            type="text"
            className="form-control"
            id="height"
            name="height"
            value={height}
            onChange={handleHeightChange}
            aria-label="Enter your height"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ethnicity" className="form-label text-white">
            Ethnicity:
          </label>
          <select
            id="ethnicity"
            name="ethnicity"
            className="form-select"
            value={ethnicity}
            onChange={(e) => setEthnicity(e.target.value)}
            aria-label="Select your ethnicity"
          >
            <option value="">Select your ethnicity</option>
            <option value="Indigenous American/Native Alaskan">
              Indigenous American/Native Alaskan
            </option>
            <option value="Black African">Black African</option>
            <option value="Black or African American">
              Black or African American
            </option>
            <option value="East Asian">East Asian</option>
            <option value="Southeast Asian">Southeast Asian</option>
            <option value="South Asian">South Asian</option>
            <option value="Native Hawaiian or Pacific Islander">
              Native Hawaiian or Pacific Islander
            </option>
            <option value="Latine/Hispanic/Latinx or Spanish origin">
              Latine/Hispanic/Latinx or Spanish origin
            </option>
            <option value="Middle Eastern or North African">
              Middle Eastern or North African
            </option>
            <option value="White or European Descent">
              White or European Descent
            </option>
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="Prefer to describe">Prefer to describe</option>
          </select>
        </div>
        {errorMessage && (
          <div className="text-danger mb-3" aria-live="polite">
            {errorMessage}
          </div>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNextClick}
          aria-label="Proceed to the next step"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form;
