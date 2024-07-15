// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import WalletConnectPage from './WalletConnectPage';
import Header from './Header';
import MainPage from './MainPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
        <Header/>
        </nav>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/connect" element={<Home />} />

          <Route path="/connect-wallet" element={<WalletConnectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

