export interface UserProfile {
    name: string;
    title: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
}

export interface ChatMessage {
    id: string;
    sender: 'user' | 'bot';
    content: string;
    timestamp: Date;
}

export interface ChatContextType {
    messages: ChatMessage[];
    sendMessage: (message: string) => void;
    clearChat: () => void;
}

export interface ApiResponse {
    success: boolean;
    data?: any;
    error?: string;
}