import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const InputBox = ({ onSend, loading }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
          placeholder="Send a message..."
          className={`flex-1 px-4 py-3 rounded-lg focus:outline-none transition-colors ${
            isDarkMode
              ? 'bg-gray-800 text-white placeholder-gray-500 focus:bg-gray-700'
              : 'bg-gray-100 text-gray-900 placeholder-gray-400 focus:bg-gray-50'
          }`}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            loading || !input.trim()
              ? isDarkMode
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isDarkMode
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default InputBox;
