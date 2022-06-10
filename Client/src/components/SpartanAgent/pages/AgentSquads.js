import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import SidebarAgent from "../SidebarAgent";
import axios from "axios";

function AgentSquads() {
  const [stadiumId, setStadiumId] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [submitedRegister, setSubmitedRegister] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("email");
    if (items != null) {
      setlogged(true);
    }
    console.log("LOGGED???", logged);
  });
  async function registerSquad(e) {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://localhost:7122/api/Squad/addSquad",
      data: {
        stadiumId: stadiumId,
        name: name,
        city: city,
        isVerified: isVerified,
      },
    }).then(
      (response) => {
        console.log("response register referee", response);
        setSubmitedRegister(true);
      },
      (error) => {
        console.log("error", error);
        setRegistered(true);
      }
    );
  }

  return (
    <div>
      {logged ? (
        <>
          <SidebarAgent />
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "40%",
              width: "500px",
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Squad Stadium</Form.Label>
                <Form.Control
                  onChange={(e) => setStadiumId(e.target.value)}
                  type="number"
                  placeholder="Enter Squad Stadium"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Squad Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Squad Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formExperience">
                <Form.Label>Squad City</Form.Label>
                <Form.Control
                  onChange={(e) => setCity(e.target.value)}
                  type="email"
                  placeholder="Enter Squad City"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>Is Squad Verified</Form.Label>
                <Form.Control
                  onChange={(e) => setIsVerified(e.target.value)}
                  type="text"
                  placeholder="Is Verified?"
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={registerSquad}>
                Register Squad
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <div>
          <h4>Agent Squads</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}

export default AgentSquads;
