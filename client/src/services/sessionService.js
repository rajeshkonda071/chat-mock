import { chatAPI } from '../utils/api';

export const sessionService = {
  // Create a new session
  async createSession() {
    try {
      const session = await chatAPI.startNewChat();
      return {
        success: true,
        sessionId: session.sessionId,
        data: session,
      };
    } catch (error) {
      console.error('Error creating session:', error);
      return { success: false, error: error.message };
    }
  },

  // Fetch all sessions
  async fetchAllSessions() {
    try {
      const sessions = await chatAPI.getSessions();
      return {
        success: true,
        data: sessions,
      };
    } catch (error) {
      console.error('Error fetching sessions:', error);
      return { success: false, error: error.message };
    }
  },

  // Get session history
  async fetchSessionHistory(sessionId) {
    try {
      const history = await chatAPI.getSessionHistory(sessionId);
      return {
        success: true,
        data: history,
      };
    } catch (error) {
      console.error('Error fetching session history:', error);
      return { success: false, error: error.message };
    }
  },

  // Send message in session
  async sendMessage(sessionId, question) {
    try {
      const response = await chatAPI.askQuestion(sessionId, question);
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      console.error('Error sending message:', error);
      return { success: false, error: error.message };
    }
  },

  // Submit feedback for a message
  async submitMessageFeedback(sessionId, messageId, feedback) {
    try {
      const result = await chatAPI.submitFeedback(sessionId, messageId, feedback);
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Error submitting feedback:', error);
      return { success: false, error: error.message };
    }
  },
};

export default sessionService;
