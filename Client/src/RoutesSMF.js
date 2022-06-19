import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/home';
import Match from './components/Match/match';
import Results from './components/Results/results';
import Teams from './components/Teams/teams';
import About from './components/about';
import Register from './components/Register/register'
import Login from './components/Login/login';
import ConfirmEmail from './components/Register/confirmEmail'
import SpartanAgent from './components/SpartanAgent/SpartanAgent';
import AgentLeaguesSquads from './components/SpartanAgent/pages/AgentLeagueSquads';
import AgentHome from './components/SpartanAgent/pages/AgentHome';
import AgentMatches from './components/SpartanAgent/pages/AgentMatches';
import AgentReferees from './components/SpartanAgent/pages/AgentReferees';
import AgentStadium from './components/SpartanAgent/pages/AgentStadium';
import AgentEditUsers from './components/SpartanAgent/pages/AgentEditUsers';
import AgentVerifyTeams from './components/SpartanAgent/pages/AgentVerifyTeams';
import AdminAddSquad from './components/TeamAdmin/pages/AdminAddSquad';
import AdminHome from './components/TeamAdmin/pages/AdminHome';
import PageNotFound from './components/PageNotFound/PageNotFound';
import AgentLeagues from './components/SpartanAgent/pages/AgentLeagues';
import AgentChangePassword from "./components/ChangePassword";

export default function RoutesSMF() {
  const [logged, setlogged] = useState(false);
  useEffect(() => {
    var getData = null;
    getData = localStorage.getItem("email");
    if (getData != null) {
      setlogged(true);
    }
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/matches' element={<Match />} />
          <Route exact path='/results' element={<Results />} />
          <Route exact path='/teams' element={<Teams />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/confirmEmail' element={<ConfirmEmail />} />
          <Route exact path='/agent' element={<SpartanAgent />} />
          <Route path='/agent' exact element={<AgentHome />} />
          <Route path='/agent-league-squads' exact element={<AgentLeaguesSquads />} />
          <Route path='/agent-matches' exact element={<AgentMatches />} />
          <Route path='/agent-referees' exact element={<AgentReferees />} />
          <Route path='/agent-stadiums' exact element={<AgentStadium />} />
          <Route path='/agent-edit-users' exact element={<AgentEditUsers />} />
          <Route path='/agent-squads-verify' exact element={<AgentVerifyTeams />} />
          <Route path="/agent-leagues" exact element={<AgentLeagues />} />
          <Route path="/reset-password" exact element={<AgentChangePassword />} />
          <Route path='/admin' exact element={<AdminHome />} />
          <Route exact path='/admin-squad' element={<AdminAddSquad />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
