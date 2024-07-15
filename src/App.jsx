import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import WalletConnectPage from './WalletConnectPage';
import Header from './Header';
import MainPage from './MainPage';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return null; // Renders nothing (purely for side effect)
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <Header />
        </nav>

        <Routes>
          {/* Wrap your Routes in ScrollToTop component */}
          <ScrollToTop />
          <Route path="/" element={<MainPage />} />
          <Route path="/connect" element={<Home />} />
          <Route path="/connect-wallet" element={<WalletConnectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
