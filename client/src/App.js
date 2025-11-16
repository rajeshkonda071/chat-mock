import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSessionId, setCurrentSessionId] = React.useState(null);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
          currentSessionId={currentSessionId}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={handleMenuClick} />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/chat/:sessionId"
              element={
                <ChatPage
                  onSessionChange={(id) => setCurrentSessionId(id)}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
