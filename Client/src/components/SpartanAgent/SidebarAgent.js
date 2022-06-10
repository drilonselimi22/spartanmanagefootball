import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgentPages } from "./AgentPages";
import "./SidebarAgent.css";
import Logo from "../../images/textlogo.svg";
import * as CgIcons from "react-icons/cg";

function SidebarAgent() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("email");
    if (items != null) {
      setlogged(true);
    }
    console.log("LOGGED???", logged);
  });

  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  }
  return (
    <div >
        <div className="sidebar__agent">
          <div>
            <img src={Logo} width="130px" />
          </div>
          <div>
            <h4>Agent Name</h4>
          </div>
        </div>
        <nav 
          className={sidebar ? "nav-menu active" : "nav-menu"}
        >
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                {/* <img src={Logo} width='50px' /> */}
              </Link>
            </li>
            {AgentPages.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li onClick={handleLogout} className="nav-text" >
              <Link to={"/login"}>
                <CgIcons.CgLogOut />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default SidebarAgent;
