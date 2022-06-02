import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import background from '../images/homeimage.jpg'; 

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [submitedRegister, setSubmitedRegister] = useState(false);
    const [loader, setLoader] = useState(false)
    const [registered, setRegistered] = useState(false)


    
    async function  registerData(e) {
        e.preventDefault()
        setLoader(true)
        await axios({ 
            method: 'POST',
            url: 'https://localhost:7122/api/User/register-admin',
            data: {
                username:username,
                email:email,
                password:password,
                roleId:role
            }
          }).then((response) => {
                console.log("responseLogin",response);
                setSubmitedRegister(true)
          }, (error) => {
            console.log("error",error);
            setRegistered(true)
          });
          setLoader(false)
          
    }

    return (
        <div>
            <div style={{
                backgroundImage: `url(${background})`,
                height: '85vh',
                objectFit: 'cover'
            }}>

            {
                submitedRegister?
                <div style={{
                    display : "flex",
                    justifyContent : "center",
                    alignContent: "center",
                    flexDirection: "column"}}>

                    
                </div>
                :
                <div>
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
                {
                    loader? 
                    <div style={{
                        display:"flex",
                        justifyContent :"center",
                        alignItems : "center", 
                        flexDirection : "column"
                    }}>
                        <Spinner animation="border" variant="light" />
                        <br />
                        <p style={{color : "white"}}>Loading...</p>
                    </div>
                    
                    : 
                    <div>
                        <Form.Group className="mb-3">
                        <Form.Label className='text-warning'>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-warning'>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='text-warning'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    {/* <Form.Group className="mb-3">
                        <Form.Label className='text-warning'>Role ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter your role" onChange={(e) => setRole(e.target.value)} />
                    </Form.Group> */}
                    {registered ? <p style={{color : "#ef9292"}}>Make sure the fields are not empty </p> : null}
                    <Button variant="warning" type="submit" onClick={registerData}>
                        Register
                    </Button>
                    </div>
                    }
                </Form>
                
            </div>
            
            }
            
            </div>
        </div>
    );
} 