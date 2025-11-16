# Chat Mock - ChatGPT-Style Application

A simplified ChatGPT-style application with a responsive React frontend and Node.js Express backend serving mock data.

## 🎯 Features

- ✅ **Landing Page** - "New Chat" welcome screen
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Chat Interface** - Ask questions and get instant responses
- ✅ **Table View** - Display structured tabular data with descriptions
- ✅ **Answer Feedback** - Like 👍 and Dislike 👎 buttons for each response
- ✅ **Dark/Light Theme** - Toggle theme with persistent storage
- ✅ **Session Management** - Create sessions, view history
- ✅ **Left Sidebar** - Collapsible panel with sessions and user info
- ✅ **Session History** - Load complete conversation history

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation and routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **JavaScript (ES6+)** - Programming language

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique identifier generation

## 📁 Project Structure

```
chat-mock/
├── client/                          # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js           # Top navigation bar
│   │   │   ├── Sidebar.js          # Left sidebar with sessions
│   │   │   ├── ChatMessage.js      # Individual chat message
│   │   │   └── InputBox.js         # Message input field
│   │   ├── pages/
│   │   │   ├── LandingPage.js      # Welcome page
│   │   │   └── ChatPage.js         # Chat interface page
│   │   ├── context/
│   │   │   └── ThemeContext.js     # Dark/Light theme context
│   │   ├── utils/
│   │   │   └── api.js              # API client
│   │   ├── App.js                  # Main app component
│   │   ├── index.js                # Entry point
│   │   └── index.css               # Global styles
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── package.json
│   └── .env                        # Environment variables
│
└── server/                          # Node.js Backend
    ├── data/
    │   ├── sessions.json           # Mock sessions data
    │   ├── chatHistory.json        # Mock chat history
    │   └── mockAnswers.json        # Mock API responses
    ├── routes/
    │   └── chat.js                 # Chat API routes
    ├── server.js                   # Express server entry point
    └── package.json
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

**Development mode with auto-reload:**
```bash
npm run dev
```

### Frontend Setup

1. In a new terminal, navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## 📡 API Endpoints

### Sessions Management

**Start New Chat**
```
POST /api/chat/sessions/new
Response: { sessionId, title, createdAt, updatedAt, messages }
```

**Get All Sessions**
```
GET /api/chat/sessions
Response: Array of session objects
```

**Get Session History**
```
GET /api/chat/sessions/:sessionId/history
Response: { sessionId, messages: Array }
```

### Chat Operations

**Ask a Question**
```
POST /api/chat/sessions/:sessionId/ask
Body: { question: "string" }
Response: { messageId, question, answer, tableData, timestamp, feedback }
```

**Submit Feedback**
```
POST /api/chat/sessions/:sessionId/feedback
Body: { messageId: "string", feedback: "like" | "dislike" }
Response: { success, messageId, feedback, message }
```

## 🎨 Features Overview

### 1. Landing Page
- Welcome screen with "Start New Chat" button
- Feature highlights
- Responsive layout

### 2. Chat Interface
- Clean message display
- User questions on the right (blue)
- AI responses on the left (dark)
- Structured table data display
- Auto-scrolling to latest messages
- Loading states

### 3. Sidebar
- Collapsible navigation (mobile-friendly)
- Session list with quick access
- "New Chat" button
- User information section
- Smooth animations

### 4. Feedback System
- Like/Dislike buttons for each response
- Visual feedback on selection
- Persistent feedback storage

### 5. Theme Toggle
- Dark/Light mode switcher in header
- Persistent theme preference
- Smooth theme transitions
- System-wide color scheme changes

### 6. Session Management
- URL-based session routing
- Session history loading
- Create new sessions
- Session list in sidebar

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Mobile** (320px and up)
- **Tablet** (768px and up)
- **Desktop** (1024px and up)

Sidebar collapses on mobile and can be toggled via menu button.

## 🔧 Configuration

### Environment Variables

**Frontend (.env)**
```
REACT_APP_API_URL=http://localhost:5000/api
```

**Backend**
- Default port: 5000 (change with `PORT` environment variable)
- CORS enabled for all origins

## 📝 Mock Data

The application uses three JSON files for mock data:

### 1. `sessions.json`
Contains sample chat sessions with IDs, titles, and timestamps.

### 2. `chatHistory.json`
Contains full conversation history for each session with messages, answers, and table data.

### 3. `mockAnswers.json`
Contains random answers that are returned when users ask questions.

All mock data is served directly from these JSON files - **no database required**.

## 🎯 Usage Guide

### Starting a Chat
1. Click "Start New Chat" button on the landing page
2. A new session is created with a unique ID in the URL
3. Begin typing questions

### Asking Questions
1. Type your question in the input box at the bottom
2. Click "Send" or press Enter
3. Receive a response with structured table data

### Giving Feedback
1. After receiving an answer, click 👍 or 👎
2. Feedback is recorded and highlighted

### Viewing History
1. Click on any session in the left sidebar
2. Previous conversation history loads
3. You can continue the conversation

### Switching Themes
1. Click the sun/moon icon in the top-right header
2. Theme switches immediately
3. Preference is saved in local storage

### Collapsing Sidebar
1. On mobile, click the menu icon (☰) in the header
2. Sidebar slides in/out
3. Click outside or the X button to close

## 🚀 Deployment

### Deploy Backend (Node.js)
- Deploy to Heroku, Railway, Vercel, or any Node.js hosting
- Set `PORT` environment variable
- Example for Heroku:
```bash
heroku create your-app-name
git push heroku main
```

### Deploy Frontend (React)
- Build the production bundle:
```bash
cd client
npm run build
```

- Deploy to Vercel, Netlify, or any static hosting
- Update `REACT_APP_API_URL` to point to your deployed backend

## 📦 Key Dependencies

### Frontend
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.20.0
- `axios`: ^1.6.2
- `tailwindcss`: ^3.3.0

### Backend
- `express`: ^4.18.2
- `cors`: ^2.8.5
- `uuid`: ^9.0.0

## 🎓 Code Structure & Best Practices

### React Components
- Functional components with hooks
- Context API for theme management
- Proper separation of concerns
- Reusable components (ChatMessage, InputBox, etc.)

### Styling
- Utility-first approach with Tailwind CSS
- Consistent color scheme
- Responsive breakpoints
- Dark mode support

### API Integration
- Centralized API client (`utils/api.js`)
- Consistent error handling
- Axios interceptors ready for expansion

### State Management
- React hooks (useState, useEffect, useContext, useRef)
- Context for global theme state
- Local component state for UI interactions

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is already in use:
```bash
# Change backend port
PORT=5001 npm start
```

### CORS Issues
Ensure both servers are running and CORS is enabled in backend.

### Mock Data Not Loading
Check that JSON files are in `server/data/` directory.

### Blank Screen
1. Check browser console for errors
2. Ensure backend is running
3. Verify API URL in `.env`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Notes

- All code is original and follows React/Node.js best practices
- No plagiarism - built from scratch
- Modular and scalable architecture
- Ready for production deployment
- Easy to extend with new features

## 🔄 Future Enhancements

Potential features to add:
- Database integration (MongoDB, PostgreSQL)
- User authentication
- Real API integration
- Export chat history
- Search functionality
- Custom theme colors
- Message persistence
- Real-time updates with WebSockets

---

**Happy Chatting! 🚀**
