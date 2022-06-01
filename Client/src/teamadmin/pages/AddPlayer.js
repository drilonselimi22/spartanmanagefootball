import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import NavbarAdmin from "../NavbarAdmin";
import axios from "axios";
export default function AddPlayer() {
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [suqadTeamId, setSquadTeamId] = useState("");

  async function  registerPlayer(e) {
    e.preventDefault()
    setLoader(true)
    await axios({ 
        method: 'POST',
        url: 'https://localhost:7122/api/PlayerOperations/addPlayer',
        data: {
            name:name,
            lastName:lastName,
            age:age,
            number:number,
            position: position,
            suqadTeamId : suqadTeamId
        }
      }).then((response) => {
            console.log("responseLogin",response);
      }, (error) => {
        console.log("error",error);
       
      });
      setLoader(false)
      
}

  return (
    <div>
      <NavbarAdmin />
      <Form
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          padding: "50px",
          backgroundColor: "rgba(120, 120, 120, 0.3)",
          borderRadius: "10px",
        }}
      >
        {loader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Spinner animation="border" variant="light" />
            <br />
            <p style={{ color: "white" }}>Loading...</p>
          </div>
        ) : (
          <div>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-warning">LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LastName"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Team-ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Team-ID"
                onChange={(e) => setSquadTeamId(e.target.value)}
              />
            </Form.Group>

            {/* {registered ? <p style={{color : "#ef9292"}}>Make sure the fields are not empty </p> : null} */}
            <Button onClick={registerPlayer} variant="warning" type="submit">
              Register
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
}
