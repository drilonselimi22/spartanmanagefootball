import React, { useState, useEffect } from "react";
import SidebarAgent from "../SidebarAgent";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function AgentStadium() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
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
  async function registerStadium(e) {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://localhost:7122/api/Squad/addSquad",
      data: {
        name: name,
        location: location,
        capacity: capacity,
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
              top: "50%",
              left: "55%",
              // width: "500px",
              transform: "translate(-50%, -50%)"
            }}
          >
            <Form style={{
              backgroundColor: "#fff",
              padding: "20px",
              width: "800px",
            }}>
              <h2>Add Stadium</h2>
              <hr></hr>
              <Form.Group className="mb-3">
                <Form.Label>Stadium Name</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Stadium Name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stadium Location</Form.Label>
                <Form.Control
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Enter Stadium Location"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Stadium Capacity</Form.Label>
                <Form.Control
                  onChange={(e) => setCapacity(e.target.value)}
                  type="email"
                  placeholder="Enter Stadium Capacity"
                />
              </Form.Group>

              <Button style={{ width: "auto" }} variant="success" type="submit" onClick={registerStadium}>
                Register Squad
              </Button>
            </Form>
          </div>
        </>
      ) : (
        <div>
          <h4>Agent Stadium</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}

export default AgentStadium;
