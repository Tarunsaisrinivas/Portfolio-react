import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <Router>
            <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
