import { Form, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from 'axios';

function AgentChangePassword() {

    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    var email = params.get("email");
    var token = params.get("token");

    async function changePassword(e) {
        e.preventDefault();
        await axios({
            method: "post",
            url: "https://localhost:7122/api/User/ResetPassword",
            data: {
                token: token,
                Email: email,
                NewPassword: password,
                ConfirmPassword: confPass,
            },
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(
            (response) => {
                handleShow();
                navigate("/login");
            },
            (error) => {
                handleShow();
                navigate("/login");
            }
        );
    }

    return (
        <div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Password has been changed successfuly</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Redirect
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{ backgroundColor: "#009444" }} onClick={handleClose}>Understood</Button>
                </Modal.Footer>
            </Modal>

            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px"
            }}>
                <Form style={{ width: "500px" }}>
                    <Form.Group className="mb-3">
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter new password"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onChange={(e) => setConfPass(e.target.value)}
                            type="password"
                            placeholder="Please confirm the password"
                        />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#009444", width: "auto" }} type="submit" onClick={changePassword}>
                        Change Password
                    </Button>
                </Form>

            </div>
        </div>
    )
}

export default AgentChangePassword;