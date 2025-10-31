import { useState, useEffect } from 'react';
import { fetchChatResponse } from '../services/aiClient';

const useChat = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendMessage = async (userMessage: string) => {
        setMessages((prev) => [...prev, { user: userMessage, bot: '' }]);
        setLoading(true);
        setError(null);

        try {
            const botResponse = await fetchChatResponse(userMessage);
            setMessages((prev) => {
                const updatedMessages = [...prev];
                updatedMessages[updatedMessages.length - 1].bot = botResponse;
                return updatedMessages;
            });
        } catch (err) {
            setError('Failed to fetch response from the chatbot.');
        } finally {
            setLoading(false);
        }
    };

    return { messages, sendMessage, loading, error };
};

export default useChat;