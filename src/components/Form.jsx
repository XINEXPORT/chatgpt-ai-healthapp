import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";

const API_URL =
  "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
const API_TOKEN = "";

const Form = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setAge(value);
    }
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value >= 0) {
      setWeight(value);
    }
  };

  const query = async (data) => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `API request failed with status ${response.status}: ${errorText}`,
        );
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error querying the API:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      inputs: `Age: ${age}, Weight: ${weight}`,
    };

    try {
      const result = await query(formData);

      if (result) {
        navigate("/chatgpt-ai-healthapp/conversation", { state: { result } });
        console.log(result);
      }
    } catch (error) {
      console.error("Error handling the form submission:", error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label text-white">
            First name:
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            defaultValue="John"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label text-white">
            Last name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            defaultValue="Doe"
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
          />
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
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ethnicity" className="form-label text-white">
            Ethnicity:
          </label>
          <select id="ethnicity" name="ethnicity" className="form-select">
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
        <div className="mb-3">
          <label className="form-label text-white">Sex:</label>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              className="form-check-input me-1"
              id="male"
              name="sex"
              value="male"
            />
            <label htmlFor="male" className="form-check-label text-white">
              Male
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              className="form-check-input me-1"
              id="female"
              name="sex"
              value="female"
            />
            <label htmlFor="female" className="form-check-label text-white">
              Female
            </label>
          </div>
          <div className="d-flex align-items-center">
            <input
              type="radio"
              className="form-check-input me-1"
              id="non-binary"
              name="sex"
              value="non-binary"
            />
            <label htmlFor="non-binary" className="form-check-label text-white">
              Non-binary
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
