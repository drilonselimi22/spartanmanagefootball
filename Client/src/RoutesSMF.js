import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/home';
import Match from './components/Match/match';
import Results from './components/Results/results';
import Teams from './components/Teams/teams';
import About from './components/about';
import Register from './components/Register/register'
import Login from './components/Login/login';
import Navbar from './spartanadmin/Navbar';
import SpartanAdmin from './components/spartanAdmin';
import SpartanLeagues from './spartanadmin/pages/spartanLeagues';
import SpartanSquads from './spartanadmin/pages/spartanSquads';
import ConfirmEmail from './components/Register/confirmEmail';
import Navigation from './components/Navigation/navigation';
import NavbarAdmin from './teamadmin/NavbarAdmin';
import AddTeam from './teamadmin/pages/AddTeam';
import AddPlayer from './teamadmin/pages/AddPlayer'


export default function RoutesSMF() {
  // const [logged, setlogged] = useState(false)
  // useEffect(() => {
  //   var items = null
  //   items = JSON.parse(localStorage.getItem('email'));
  //   if(items != null){
  //     setlogged(true)
  //   }
  // });

  return (
    <div>

      <Router>
        {/* {logged?null :<Navigation />} */}
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/matches' element={<Match />} />
          <Route exact path='/results' element={<Results />} />
          <Route exact path='/teams' element={<Teams />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/spartan' element={<Navbar />} />
          <Route exact path='/spartann' element={<SpartanAdmin />} />
          <Route exact path='/leagues' element={<SpartanLeagues />} />
          <Route exact path='/squads' element={<SpartanSquads />} />
          <Route exact path='/teamadmin' element={<NavbarAdmin />} />
          <Route exact path='/addteam' element={<AddTeam />} />
          <Route exact path='/addplayers' element={<AddPlayer />} />
          <Route exact path='/confirmEmail' element={<ConfirmEmail />} />
        </Routes>
      </Router>
    </div>

  )
}
