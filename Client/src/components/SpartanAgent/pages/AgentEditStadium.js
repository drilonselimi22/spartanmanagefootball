import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import SidebarAgent from "../SidebarAgent";
import axios from "axios";

function AgentEditStadium() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setLocation(localStorage.getItem("Location"));
    setCapacity(localStorage.getItem("Capacity"));
  }, []);

  //   const updateStadium = (e) => {
  //     e.prevent.default();
  //     axios.put(`https://localhost:7122/api/Stadium/${id}`, {
  //       name,
  //       location,
  //       capacity,
  //     });
  //   };

  async function updateStadium(e) {
    e.prevent.default();
    await axios({
      method: "PUT",
      url: `https://localhost:7122/api/Stadium/${id}`,
      data: {
        name: name,
        location: location,
        capacity: capacity,
      },
    }).then(
      (response) => {
        console.log("response register referee", response);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  return (
    <div>
      <SidebarAgent />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          width: "800px",
        }}
      >
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Stadium Name</Form.Label>
            <Form.Control
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Stadium Location</Form.Label>
            <Form.Control
              type='text'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Stadium Capacity</Form.Label>
            <Form.Control
              type='number'
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </Form.Group>

          <Button
            variant='success'
            type='submit'
            style={{ width: "auto" }}
            onClick={updateStadium}
          >
            Update Stadium
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AgentEditStadium;
