import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load mock data
const loadMockAnswers = async () => {
  const data = await readFile(join(__dirname, '../data/mockAnswers.json'), 'utf-8');
  return JSON.parse(data);
};

const loadChatHistory = async () => {
  const data = await readFile(join(__dirname, '../data/chatHistory.json'), 'utf-8');
  return JSON.parse(data);
};

const loadSessions = async () => {
  const data = await readFile(join(__dirname, '../data/sessions.json'), 'utf-8');
  return JSON.parse(data);
};

// Start new chat (create new session)
router.post('/sessions/new', async (req, res) => {
  try {
    const sessionId = `sess-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newSession = {
      sessionId,
      title: 'New Chat',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: []
    };
    res.json(newSession);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// Get all sessions
router.get('/sessions', async (req, res) => {
  try {
    const data = await loadSessions();
    res.json(data.sessions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load sessions' });
  }
});

// Get session history
router.get('/sessions/:sessionId/history', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const chatHistory = await loadChatHistory();
    
    if (chatHistory[sessionId]) {
      res.json({ sessionId, messages: chatHistory[sessionId] });
    } else {
      res.json({ sessionId, messages: [] });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to load chat history' });
  }
});

// Ask a question in a session
router.post('/sessions/:sessionId/ask', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const mockAnswers = await loadMockAnswers();
    
    // Get a random answer from mock data
    const randomAnswer = mockAnswers.answers[
      Math.floor(Math.random() * mockAnswers.answers.length)
    ];

    const message = {
      messageId: `msg-${uuidv4()}`,
      question,
      answer: randomAnswer.answer,
      tableData: randomAnswer.tableData,
      timestamp: new Date().toISOString(),
      feedback: null
    };

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process question' });
  }
});

// Submit feedback (like/dislike)
router.post('/sessions/:sessionId/feedback', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { messageId, feedback } = req.body;

    if (!['like', 'dislike'].includes(feedback)) {
      return res.status(400).json({ error: 'Invalid feedback' });
    }

    res.json({ 
      success: true, 
      messageId, 
      feedback,
      message: `Feedback recorded: ${feedback}`
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

export default router;
