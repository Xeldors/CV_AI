import React, { useState } from 'react';
import { ChatProvider } from './contexts/ChatContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './components/Cover';
import ChatBot from './components/ChatBot';
import './index.css';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ChatProvider>
      <div className="app-container">
        <Header />
        <Cover onOpenChat={() => setIsChatOpen(true)} />
        <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        
        {/* Floating Action Button */}
        {!isChatOpen && (
          <button 
            className="chatbot-fab" 
            onClick={() => setIsChatOpen(true)}
            aria-label="Open chat"
          >
            💬
          </button>
        )}
        
        <Footer />
      </div>
    </ChatProvider>
  );
};

export default App;