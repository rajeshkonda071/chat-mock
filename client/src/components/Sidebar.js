import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { chatAPI } from '../utils/api';

const Sidebar = ({ isOpen, onClose, currentSessionId }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const data = await chatAPI.getSessions();
      setSessions(data);
    } catch (error) {
      console.error('Failed to fetch sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } w-64 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`}
      >
        {/* Close button for mobile */}
        <div className="md:hidden p-4 border-b border-gray-700">
          <button
            onClick={onClose}
            className={`p-2 ${
              isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4 border-b border-gray-700">
          <Link
            to="/"
            onClick={onClose}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              isDarkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}
          >
            + New Chat
          </Link>
        </div>

        {/* Sessions List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3
              className={`text-xs font-semibold uppercase mb-3 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Sessions
            </h3>

            {loading ? (
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Loading sessions...
              </div>
            ) : sessions.length === 0 ? (
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No sessions yet
              </div>
            ) : (
              <div className="space-y-2">
                {sessions.map((session) => (
                  <Link
                    key={session.sessionId}
                    to={`/chat/${session.sessionId}`}
                    onClick={onClose}
                    className={`block p-3 rounded-lg truncate transition-colors ${
                      currentSessionId === session.sessionId
                        ? isDarkMode
                          ? 'bg-gray-700 text-white'
                          : 'bg-gray-200 text-gray-900'
                        : isDarkMode
                        ? 'hover:bg-gray-800 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                    title={session.title}
                  >
                    {session.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* User Info */}
        <div
          className={`p-4 border-t ${
            isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'
              }`}
            >
              U
            </div>
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                User
              </p>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                user@example.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
