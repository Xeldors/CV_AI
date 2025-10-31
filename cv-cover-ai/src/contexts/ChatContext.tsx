import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Message {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

interface ChatContextType {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (message: string) => Promise<void>;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
    children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hello! I\'m an AI assistant here to help you learn more about this CV. Feel free to ask me about experience, skills, projects, or anything else!',
            timestamp: new Date()
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = async (content: string) => {
        // Add user message
        const userMessage: Message = {
            role: 'user',
            content,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Call your FastAPI backend
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: content }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            
            // Add assistant message
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.response || 'Sorry, I couldn\'t process that request.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            // Add error message
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Sorry, I\'m having trouble connecting to the server. Please make sure the backend is running on http://localhost:8000',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ChatContext.Provider value={{ messages, isLoading, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = (): ChatContextType => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};