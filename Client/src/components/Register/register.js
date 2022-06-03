import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Spinner, Container } from "react-bootstrap";
import Navigation from "../Navigation/navigation";
import registerImage from "../../images/register.svg";
import "./register.css";
import Footer from "../Footer/footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [submitedRegister, setSubmitedRegister] = useState(false);
  const [loader, setLoader] = useState(false);
  const [registered, setRegistered] = useState(false);

  async function registerData(e) {
    e.preventDefault();
    setLoader(true);
    await axios({
      method: "POST",
      url: "https://localhost:7122/api/User/register-admin",
      data: {
        username: username,
        email: email,
        identityNumber: identityNumber,
        birthDate: birthDate,
        password: password,
        roleId: role,
      },
    }).then(
      (response) => {
        console.log("responseLogin", response);
        setSubmitedRegister(true);
      },
      (error) => {
        console.log("error", error);
        setRegistered(true);
      }
    );
    setLoader(false);
  }

  return (
    <div>
      <Container className="register__container">
        <div className="register__header">
          <div>
            <img src={registerImage} width="80%" />
          </div>

          <div>
            <Form className="register__form">
              {loader ? (
                <div>
                  <Spinner animation="border" variant="light" />
                  <p>Loading...</p>
                </div>
              ) : (
                <div>
                  <div>
                    <h2>Register</h2>
                  </div>

                  <Form.Group className="mb-3">
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
                      type="number"
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

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your role"
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </Form.Group>

                  {registered ? (
                    <p style={{ color: "#ef9292" }}>
                      Make sure the fields are not empty{" "}
                    </p>
                  ) : null}
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
