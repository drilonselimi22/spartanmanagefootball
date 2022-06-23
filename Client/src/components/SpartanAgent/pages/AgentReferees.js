import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import SidebarAgent from "../SidebarAgent";
import axios from "axios";

function AgentReferees() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
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
  async function registerReferee(e) {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://localhost:7122/api/Referees/addReferee",
      data: {
        name: name,
        lastName: lastName,
        experience: experience,
        city: city,
        position: position,
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
              left: "35%",
              width: "700px",
              backgroundColor: "#fff",
              padding: "20px"
            }}
          >
            <Form>
              <h2>Add referee</h2>
              <hr></hr>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Referee Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter referee name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Referee Last Name</Form.Label>
                <Form.Control
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Enter referee last name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formExperience">
                <Form.Label>Referee Experience</Form.Label>
                <Form.Control
                  onChange={(e) => setExperience(e.target.value)}
                  type="email"
                  placeholder="Enter referee experience"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCity">
                <Form.Label>Referee City</Form.Label>
                <Form.Control
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="Enter referee city"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPosition">
                <Form.Label>Referee Position</Form.Label>
                <Form.Control
                  onChange={(e) => setPosition(e.target.value)}
                  type="text"
                  placeholder="Enter referee position"
                />
              </Form.Group>

              <Button style={{ width: "auto" }} variant="success" type="submit" onClick={registerReferee}>
                Register Referee
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <div>
          <h4>Agent Regerees</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}

export default AgentReferees;
