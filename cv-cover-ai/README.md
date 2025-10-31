# CV Cover AI - Professional Portfolio Frontend

A modern, professional React + TypeScript frontend for showcasing your CV with an integrated AI chatbot assistant.

## 🎯 Features

- **Modern UI/UX**: Dark theme with gradient accents, perfect for a quantitative analyst & software developer
- **AI Chatbot Integration**: Interactive AI assistant to answer questions about your CV
- **Responsive Design**: Fully responsive across all devices
- **Enterprise-Ready**: Built with TypeScript, proper component architecture, and best practices
- **FastAPI Backend Ready**: Configured to connect to your FastAPI backend at `http://localhost:8000/api/chat`

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- FastAPI backend running on port 8000 (optional but recommended)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Cover.tsx        # Hero section with stats
│   ├── ChatBot.tsx      # AI chatbot interface
│   └── Footer.tsx       # Footer with links
├── contexts/            # React contexts
│   └── ChatContext.tsx  # Chat state management
├── styles/              # CSS files
│   ├── variables.css    # CSS variables
│   └── components.css   # Component styles
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Update Personal Information

1. **Cover.tsx**: Update your name, title, and stats
2. **Footer.tsx**: Update your name and social media links
3. **Skills**: Modify the skills grid in `Cover.tsx`

### Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #0a0f1e;
  --accent-color: #3b82f6;
  /* ... more variables */
}
```

### Backend Integration

The chatbot connects to your FastAPI backend at:
```
POST http://localhost:8000/api/chat
```

Expected request format:
```json
{
  "message": "user message here"
}
```

Expected response format:
```json
{
  "response": "AI response here"
}
```

## 🛠️ Technologies

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with CSS variables and animations

## 📦 Available Scripts

- `npm start`: Start development server on port 3000
- `npm run build`: Build for production
- `npm test`: Run test suite
- `npm run lint`: Lint code

## 🌐 Deployment

### Production Build

```bash
npm run build
```

The `dist/` folder will contain your production-ready files.

### Deploy to Vercel/Netlify

This project is ready to deploy to any static hosting service:

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🤝 Backend Integration

Make sure your FastAPI backend implements this endpoint:

```python
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    # Your AI logic here
    return ChatResponse(response="AI response")
```

## 📝 License

MIT

## 👤 Author

Your Name - Quantitative Data Analyst & Software Developer
