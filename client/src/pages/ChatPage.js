import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { chatAPI } from '../utils/api';
import ChatMessage from '../components/ChatMessage';
import InputBox from '../components/InputBox';

const ChatPage = () => {
  const { sessionId } = useParams();
  const { isDarkMode } = useContext(ThemeContext);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchChatHistory();
  }, [sessionId]);

  const fetchChatHistory = async () => {
    try {
      setLoading(true);
      const data = await chatAPI.getSessionHistory(sessionId);
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Failed to fetch chat history:', error);
    } finally {
      setLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (question) => {
    try {
      setSending(true);
      const message = await chatAPI.askQuestion(sessionId, question);
      setMessages([...messages, message]);
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        {loading ? (
          <div
            className={`flex items-center justify-center h-full ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p>Loading chat history...</p>
          </div>
        ) : messages.length === 0 ? (
          <div
            className={`flex items-center justify-center h-full text-center ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <div>
              <p className="text-lg font-semibold">No messages yet</p>
              <p>Start the conversation by asking a question!</p>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.messageId}
                sessionId={sessionId}
                message={message}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Box */}
      <InputBox onSend={handleSendMessage} loading={sending} />
    </div>
  );
};

export default ChatPage;
