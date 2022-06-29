import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AgentPages } from "./AgentPages";
import "./SidebarAgent.css";
import Logo from "../../images/textlogo.svg";
import * as FaIcons from "react-icons/fa"
import { Dropdown, Modal, Button } from "react-bootstrap";
import axios from "axios";

function SidebarAgent() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [logged, setlogged] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);
 

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("username");
    if (items != null) {
      setlogged(true);
    } 
  });

  async function pswSendEmail(e) {
    await axios({
      method: "post",
      url: `https://localhost:7122/api/User/ForgetPassword?email=${email}`,
    }).then(
      (response) => {
        console.log("Email sent successfuly", response);
        handleShow();
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  }

  return (
    <div >

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Change password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An email has been successfully sended, Please check the email to change the password
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "#009444" }} onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>

      <div className="sidebar__agent">
        <div>
          <img src={Logo} width="130px" />
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
        }}>
          <Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: "#009444", width: "auto" }}>
              {username}
              <FaIcons.FaUserCircle style={{
                fontSize: "1.5rem",
                color: "#fff",
                cursor: "pointer",
                marginLeft: "5px"
              }} />
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item onClick={pswSendEmail}>Change password</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} href="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
      >
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
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
        </ul>
      </nav>
    </div >
  );
}

export default SidebarAgent;
