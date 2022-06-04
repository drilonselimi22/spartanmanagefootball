import React, {useState} from 'react'
import NavbarAdmin from '../NavbarAdmin'
import { Form, Button, Spinner } from "react-bootstrap";
import axios from 'axios';
export default function AddTeam() {

    const [loader, setLoader] = useState(false)

    const [stadiumId, setStadiumId] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    // const [certificate, setCertificate] = useState(null)
    const [isVerified, setIsVerified] = useState(false)


//     "stadiumId": 0,
//   "name": "string",
//   "city": "string",
//   "isVerified": true
async function  registerPlayer(e) {
    e.preventDefault()
    setLoader(true)
    await axios({ 
        method: 'POST',
        url: 'https://localhost:7122/api/Squad/addSquad',
        data: {
            stadiumId:stadiumId,
            name:name,
            city:city,
            isVerified:isVerified 
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
              <Form.Label className="text-warning">Stadium ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stadiumID"
                onChange={(e) => setStadiumId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-warning">City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            {/* {registered ? <p style={{color : "#ef9292"}}>Make sure the fields are not empty </p> : null} */}
            <Button onClick={registerPlayer}  variant="warning" type="submit">
              Register
            </Button>
          </div>
        )}
      </Form> 
    </div>
  )
}
