export const questions = [
  { id: "name", question: "What is your name?", type: "text" },
  { id: "age", question: "What is your age?", type: "number" },
  {
    id: "gender",
    question: "What is your gender?",
    type: "select",
    options: ["Female", "Male", "Prefer not to say"],
  },
  { id: "weight", question: "What is your weight in pounds?", type: "number" },
  { id: "height", question: "What is your height in ft?", type: "text" },
  {
    id: "ethnicity",
    question: "What is your ethnicity?",
    type: "select",
    options: [
      "Indigenous American/Native Alaskan",
      "Black African",
      "Black or African American",
      "East Asian",
      "Southeast Asian",
      "South Asian",
      "Native Hawaiian or Pacific Islander",
      "Latine/Hispanic/Latinx or Spanish origin",
      "Middle Eastern or North African",
      "White or European Descent",
      "Prefer not to say",
      "Prefer to describe",
    ],
  },
  {
    id: "medications",
    question: "What are your current medications?",
    type: "text",
  },
  {
    id: "healthConditions",
    question: "What are your current health conditions?",
    type: "text",
  },
  {
    id: "healthHistory",
    question: "Please enter your family health history.",
    type: "text",
  },
  {
    id: "mealsPerDay",
    question: "How many meals do you eat per day?",
    type: "select",
    options: [
      "0-1",
      "1-3",
      "4+",
      "Prefer small snacks throughout the day",
      "Prefer not to say",
    ],
  },
  {
    id: "healthGoals",
    question:
      "What are your current health goals (ex: Lose 10 pounds, increase stamina, etc.)?",
    type: "text",
  },
];
