import axios from 'axios';

// Default to the Render backend URL for production if env var is not set
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://chat-mock-1.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatAPI = {
  // Create a new chat session
  startNewChat: async () => {
    const response = await api.post('/chat/sessions/new');
    return response.data;
  },

  // Get all sessions
  getSessions: async () => {
    const response = await api.get('/chat/sessions');
    return response.data;
  },

  // Get chat history for a session
  getSessionHistory: async (sessionId) => {
    const response = await api.get(`/chat/sessions/${sessionId}/history`);
    return response.data;
  },

  // Ask a question in a session
  askQuestion: async (sessionId, question) => {
    const response = await api.post(`/chat/sessions/${sessionId}/ask`, {
      question,
    });
    return response.data;
  },

  // Submit feedback for a message
  submitFeedback: async (sessionId, messageId, feedback) => {
    const response = await api.post(`/chat/sessions/${sessionId}/feedback`, {
      messageId,
      feedback,
    });
    return response.data;
  },
};

export default api;
