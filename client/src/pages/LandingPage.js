import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { chatAPI } from '../utils/api';

const LandingPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const startNewChat = async () => {
    try {
      setLoading(true);
      const session = await chatAPI.startNewChat();
      navigate(`/chat/${session.sessionId}`);
    } catch (error) {
      console.error('Failed to start new chat:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col items-center justify-center ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="text-center space-y-8 max-w-2xl px-4">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Welcome to Chat Mock</h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A simplified ChatGPT-style application for Q&A
          </p>
        </div>

        <button
          onClick={startNewChat}
          disabled={loading}
          className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors ${
            loading
              ? isDarkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isDarkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {loading ? 'Starting...' : 'Start New Chat'}
        </button>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 pt-16 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div className="space-y-2">
            <h3 className="font-bold text-lg">📝 Chat Interface</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Ask questions and get instant responses with structured data tables.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">💾 Session History</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Keep track of all your chat sessions and revisit conversations.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">🌙 Dark Mode</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Toggle between light and dark themes for comfortable viewing.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-lg">📱 Responsive</h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Works seamlessly on mobile, tablet, and desktop devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
