export const questions = [
    { id: "name", question: "What is your name?", type: "text" },
    { id: "age", question: "What is your age?", type: "number" },
    { id: "gender", question: "What is your gender?", type: "select", options: ["Female", "Male", "Prefer not to say"] },
    { id: "weight", question: "What is your weight?", type: "number" },
    { id: "height", question: "What is your height in ft?", type: "text" },
    { id: "ethnicity", question: "What is your ethnicity?", type: "select", options: [
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
      "Prefer to describe"
    ] },
    { id: "medications", question: "What are your current medications?", type: "text" },
    { id: "health conditions", question: "What are your current health conditions, if any?", type: "text" },
  ];
  