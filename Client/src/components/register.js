import React from 'react';
<<<<<<< HEAD
import { Form, Button } from 'react-bootstrap';
import background from '../images/homeimage.jpg';

function Register() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            height: '85vh',
            objectFit: 'cover'
        }}>
            <Form style={{
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px',
                padding: '50px',
                backgroundColor: 'rgba(120, 120, 120, 0.3)',
                borderRadius: '10px'
            }}>
                <Form.Group className="mb-3">
                    <Form.Label className='text-warning'>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-warning'>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-warning'>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-warning'>Birthday</Form.Label>
                    <Form.Control type="date" placeholder="Enter your birthday" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-warning'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="warning" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
}

=======

function Register() {
    return (
        <h1>Register Page</h1>
    );
};
>>>>>>> develop

export default Register;