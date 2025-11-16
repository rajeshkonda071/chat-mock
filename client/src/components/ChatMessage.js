import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { chatAPI } from '../utils/api';

const ChatMessage = ({ sessionId, message }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [feedback, setFeedback] = useState(message.feedback || null);
  const [submitting, setSubmitting] = useState(false);

  const handleFeedback = async (type) => {
    try {
      setSubmitting(true);
      await chatAPI.submitFeedback(sessionId, message.messageId, type);
      setFeedback(type);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 mb-8">
      {/* User Question */}
      <div className="flex justify-end">
        <div
          className={`max-w-2xl px-4 py-3 rounded-lg ${
            isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-gray-900'
          }`}
        >
          <p>{message.question}</p>
        </div>
      </div>

      {/* AI Response */}
      <div className="flex justify-start">
        <div className="max-w-4xl w-full">
          <div
            className={`px-4 py-3 rounded-lg mb-4 ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p className="mb-4">{message.answer}</p>

            {/* Table View */}
            {message.tableData && message.tableData.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className={`border-b ${
                        isDarkMode ? 'border-gray-700' : 'border-gray-300'
                      }`}
                    >
                      {Object.keys(message.tableData[0]).map((key) => (
                        <th
                          key={key}
                          className={`text-left py-2 px-3 font-semibold ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {message.tableData.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b ${
                          isDarkMode ? 'border-gray-700' : 'border-gray-200'
                        }`}
                      >
                        {Object.values(row).map((value, i) => (
                          <td
                            key={i}
                            className={`py-2 px-3 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-700'
                            }`}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Feedback Buttons */}
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Helpful?
            </span>
            <button
              onClick={() => handleFeedback('like')}
              disabled={submitting}
              className={`p-2 rounded-lg transition-colors ${
                feedback === 'like'
                  ? isDarkMode
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-600'
                  : isDarkMode
                  ? 'hover:bg-gray-800 text-gray-400'
                  : 'hover:bg-gray-200 text-gray-600'
              }`}
              title="Like"
            >
              👍
            </button>
            <button
              onClick={() => handleFeedback('dislike')}
              disabled={submitting}
              className={`p-2 rounded-lg transition-colors ${
                feedback === 'dislike'
                  ? isDarkMode
                    ? 'bg-red-600 text-white'
                    : 'bg-red-100 text-red-600'
                  : isDarkMode
                  ? 'hover:bg-gray-800 text-gray-400'
                  : 'hover:bg-gray-200 text-gray-600'
              }`}
              title="Dislike"
            >
              👎
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
