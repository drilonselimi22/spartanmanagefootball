import React, { useState } from 'react'
import SidebarAdmin from '../SidebarAdmin'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function AdminAddSquad() {
  const [stadiumId, setStadiumId] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [file, setFile] = useState(null);

  const [submitedRegister, setSubmitedRegister] = useState(false);
  const [registered, setRegistered] = useState(false);

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
        file: file
      },
      headers: {
        "Content-Type": "multipart/form-data"
      }
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

  const handleFileSelect = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div>
      <SidebarAdmin />
      <div style={{
        position: "absolute",
        top: '10%',
        left: '40%',
        width: '500px'
      }}>

        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Squad Stadium</Form.Label>
            <Form.Control onChange={(e) => setStadiumId(e.target.value)} type="number" placeholder="Enter Squad Stadium" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Squad Name</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Squad Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExperience">
            <Form.Label>Squad City</Form.Label>
            <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter Squad City" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExperience">
            <Form.Label>Squad City</Form.Label>
            <Form.Control onChange={(e) => setIsVerified(e.target.value)} type="text" placeholder="Enter Squad City" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Upload certificate</Form.Label>
            <Form.Control type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={registerSquad}>
            Register Squad
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AdminAddSquad