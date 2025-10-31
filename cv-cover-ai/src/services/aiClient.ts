import axios from 'axios';

const AI_API_URL = 'https://api.example.com/chat'; // Replace with your AI service endpoint

export const sendMessageToAI = async (message: string): Promise<string> => {
    try {
        const response = await axios.post(AI_API_URL, { message });
        return response.data.reply; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error communicating with AI service:', error);
        throw new Error('Failed to communicate with AI service');
    }
};

export const getAIResponse = async (userInput: string): Promise<string> => {
    const reply = await sendMessageToAI(userInput);
    return reply;
};