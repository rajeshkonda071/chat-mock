import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
      } border-b transition-colors duration-200`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className={`p-2 rounded-lg ${
              isDarkMode
                ? 'hover:bg-gray-800 text-white'
                : 'hover:bg-gray-100 text-gray-900'
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link to="/" className="text-xl font-bold">
            <h1
              className={
                isDarkMode ? 'text-white' : 'text-gray-900'
              }
            >
              Chat Mock
            </h1>
          </Link>
        </div>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {isDarkMode ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.464 5.464a1 1 0 010 1.414l-.707.707A1 1 0 003.343 5.464l.707-.707a1 1 0 011.414 0zm-1.414 8.485l-.707.707a1 1 0 111.414 1.414l.707-.707a1 1 0 00-1.414-1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
