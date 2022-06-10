import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Match from "./components/Match/match";
import Results from "./components/Results/results";
import Teams from "./components/Teams/teams";
import About from "./components/about";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import ConfirmEmail from "./components/Register/confirmEmail";
import SpartanAgent from "./components/SpartanAgent/SpartanAgent";
import AgentLeagues from "./components/SpartanAgent/pages/AgentLeagues";
import AgentHome from "./components/SpartanAgent/pages/AgentHome";
import AgentSquads from "./components/SpartanAgent/pages/AgentSquads";
import AgentMatches from "./components/SpartanAgent/pages/AgentMatches";
import AgentReferees from "./components/SpartanAgent/pages/AgentReferees";
import AgentStadium from "./components/SpartanAgent/pages/AgentStadium";
import AgentVerifyTeams from "./components/SpartanAgent/pages/AgentVerifyTeams";
import Verify from "./components/SpartanAgent/pages/Verify";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navigation/navigation";
// import NavbarAdmin from "./components/TeamAdmin/NavbarAdmin";
// import AddPlayer from "./components/TeamAdmin/pages/AddPlayer";
// import AddTeam from "./components/TeamAdmin/pages/AddTeam";

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
        {logged ? null : (
          <>
            <Navigation />
          </>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/matches" element={<Match />} />
          <Route exact path="/results" element={<Results />} />
          <Route exact path="/teams" element={<Teams />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/confirmEmail" element={<ConfirmEmail />} />

          <Route path="/agent" exact element={<AgentHome />} />
          <Route path="/agent-leagues" exact element={<AgentLeagues />} />
          <Route path="/agent-squads" exact element={<AgentSquads />} />
          <Route path="/agent-matches" exact element={<AgentMatches />} />
          <Route path="/agent-referees" exact element={<AgentReferees />} />
          <Route path="/agent-stadiums" exact element={<AgentStadium />} />
          <Route path="/agent-squads-verify" exact element={<AgentVerifyTeams />} />
          <Route path="/verify" exact element={<Verify />} />
          <Route exact path="/agent" element={<SpartanAgent />} />

          {/* <Route exact path="/admin" element={<NavbarAdmin />} />
          <Route exact path="/admin-player" element={<AddPlayer />} />
          <Route exact path="/agent-squad" element={<AddTeam />} /> */}
        </Routes>
        {logged ? null : <Footer />}
      </Router>
    </div>
  );
}
