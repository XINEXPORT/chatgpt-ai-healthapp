import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.VITE_OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("Missing VITE_OPENAI_API_KEY environment variable");
}

const axiosInstance = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
});

export const queryChatAPI = async (prompt, model = "gpt-4-1106-preview") => {
  try {
    const response = await axiosInstance.post("/chat/completions", {
      model,
      messages: [
        {
          role: "system",
          content: "You are a nutrition coach.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 150,
    });

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
