import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Match from './components/Match/match';
import Results from './components/Results/results';
import Teams from './components/Teams/teams';
import About from './components/about';
import Register from './components/Register/register'
import Login from './components/login';
import Navbar from './spartanadmin/Navbar';
import SpartanAdmin from './components/spartanAdmin';
import SpartanLeagues from './spartanadmin/pages/spartanLeagues';
import SpartanSquads from './spartanadmin/pages/spartanSquads';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/matches' element={<Match />} />
        <Route path='/results' element={<Results />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/spartan' element={<Navbar />} />
        <Route path='/spartan' element={<SpartanAdmin />} />
        <Route path='leagues' element={<SpartanLeagues />} />
        <Route path='/squads' element={<SpartanSquads />} />
      </Routes>
    </Router>
  );
};

export default App;
