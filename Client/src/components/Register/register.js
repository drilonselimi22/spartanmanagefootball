import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button, Spinner, Container, Nav } from "react-bootstrap";
import Navigation from "../Navigation/navigation";
import registerImage from "../../images/register.svg";
import "./register.css";
import Footer from "../Footer/footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identityNumber, setIdentityNumber] = useState(0);
  const [birthDate, setBirthDate] = useState("2022-06-21T16:40:05.496Z");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [loader, setLoader] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errorback, seterrorback] = useState(false)
  const [confirmPassword, setConfirmPassword]= useState("")
  const [msg, setMsg] = useState([])
  const [responses, setResponses] = useState('')
  const [matchedPasswords, setMatchedPasswords] = useState(false)


  const clearState = () => {
    setMsg([]);
  };
  async function registerData(e) {
    e.preventDefault();  
    clearState()
    setLoader(true) 

    await axios({
      method: 'POST',
      url: 'https://localhost:7122/api/User/register-admin',
      data: {
        username: username,
        email: email,
        identityNumber: identityNumber,
        birthDate: birthDate,
        password: password,
        roleId: role,
      }
    }).then((response) => { 
      setLoader(false)
      window.location.reload();
    }, (e) => {
      console.log(e) 
      try { 
        setLoader(false)
        // console.log("errorFromBack", e.response.data.errors.error);
        var a = e.response.data.errors.error  
        console.log("aaaaaaaaaaaaa1",a)
        setMsg(a) 
        console.log("msgaaaaaaaaaaaaaa",msg)
        seterrorback(true);  
      } catch (err) {
        console.log("trycatchworking", err); 
      } 
    });
    setLoader(false)

  }

  return (
    <div>
      <Navigation />
      <Container className="register__container">
        <div className="register__header">
          <div>
            <img src={registerImage} width="80%" />
          </div>

          <div>
            <Form className="register__form">
              {loader ? (
                <div>
                  <Spinner animation="border" variant="dark" />
                  <p>Loading...</p>
                </div>
              ) : (
                <div>
                  <div>
                    <h2>Register</h2>
                  </div>

                  <Form.Group className="mb-3">
                    { errorback ?
                      msg.map((message) => {
                        return ( 
                            <p style={{ color: "red" }}>{message}</p>  
                        ) 
                      }) : null
                    }
                    {/* <p style={{ color: "red" }}>{responses}</p> */}
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Identity Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your identity number"
                      onChange={(e) => setIdentityNumber(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Birthdate</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter your birthday daate"
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </Form.Group>
                    {matchedPasswords ? <p style={{color:"red"}}>Passwords do not match</p> : null}
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>
                  {/* {registered ? (
                    <p style={{ color: "#ef9292" }}>
                      Make sure the fields are not empty
                    </p>
                  ) : null} */}

                  <Button type="submit" onClick={registerData}>
                    Register
                  </Button>
                </div>
              )}
            </Form>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
