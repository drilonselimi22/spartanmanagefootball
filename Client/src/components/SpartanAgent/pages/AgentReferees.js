import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import SidebarAgent from '../SidebarAgent';
import axios from 'axios';

function AgentReferees() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [experience, setExperience] = useState('');
    const [city, setCity] = useState('');
    const [position, setPosition] = useState('');
    const [submitedRegister, setSubmitedRegister] = useState(false);
    const [registered, setRegistered] = useState(false);

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
                position: position
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
            <SidebarAgent />
            <div style={{
                position: "absolute",
                top: '10%',
                left: '40%',
                width: '500px'
            }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Referee Name</Form.Label>
                        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter referee name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Referee Last Name</Form.Label>
                        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter referee last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formExperience">
                        <Form.Label>Referee Experience</Form.Label>
                        <Form.Control onChange={(e) => setExperience(e.target.value)} type="email" placeholder="Enter referee experience" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCity">
                        <Form.Label>Referee City</Form.Label>
                        <Form.Control onChange={(e) => setCity(e.target.value)} type="text" placeholder="Enter referee city" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPosition">
                        <Form.Label>Referee Position</Form.Label>
                        <Form.Control onChange={(e) => setPosition(e.target.value)} type="text" placeholder="Enter referee position" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={registerReferee}>
                        Register Referee
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AgentReferees;