import { OpenAI } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Debugging statement to check if the API key is loaded
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error('Missing OPENAI_API_KEY environment variable');
}

const openai = new OpenAI({
    apiKey: apiKey,
});

async function createChatCompletion() {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: "Hello"
            }]
        });
        console.log(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error creating chat completion:', error);
    }
}

createChatCompletion();
