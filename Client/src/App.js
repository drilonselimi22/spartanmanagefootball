import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Navigation from './components/navigation';
import Results from './components/results';
import Teams from './components/teams';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import Match from './components/match';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/matches' element={<Match />} />
        <Route path='/results' element={<Results />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
