import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './modules/home/views/HomeView';
import BookingView from './modules/booking/views/BookingView';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app-root overflow-x-hidden underline-none">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/book-now" element={<BookingView />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
