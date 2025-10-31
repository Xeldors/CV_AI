import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';
import '../styles/components.css';

interface ChatBotProps {
    isOpen: boolean;
    onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
    const { messages, isLoading, sendMessage } = useChat();
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (input.trim() && !isLoading) {
            await sendMessage(input);
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <div className="chatbot-title">
                    <span>🤖</span>
                    <span>AI CV Assistant</span>
                </div>
                <button className="chatbot-close" onClick={onClose} aria-label="Close chat">
                    ✕
                </button>
            </div>

            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <div className="message-avatar">
                            {msg.role === 'user' ? '👤' : '🤖'}
                        </div>
                        <div className="message-content">
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message assistant">
                        <div className="message-avatar">🤖</div>
                        <div className="message-content">
                            <div className="typing-indicator">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input-container">
                <div className="chatbot-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me about experience, skills..."
                        disabled={isLoading}
                    />
                    <button 
                        className="chatbot-send-btn"
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                    >
                        {isLoading ? '...' : 'Send'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;