import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import DataAPI from './components/DataAPI';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile name="Khoirunnisa Ulhaq" nim="a11.2021.13611" />} />
          <Route path="/data-api" element={<DataAPI />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
