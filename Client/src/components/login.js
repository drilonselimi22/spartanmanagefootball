import React from 'react';
import { Form, Button } from 'react-bootstrap';
import background from '../images/homeimage.jpg';
import Navigation from './navigation';

function Login() {
    return (
        <div>
            <Navigation />
            <div style={{
                backgroundImage: `url(${background})`,
                height: '85vh',
                objectFit: 'cover'
            }}>
                <Form style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    padding: '50px',
                    backgroundColor: 'rgba(120, 120, 120, 0.3)',
                    borderRadius: '10px'
                }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-warning'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-warning'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}
// function Login() {
//     return (
//         <div style={{
//             backgroundImage:  `url(${background})`,
//             height: '85vh',
//             objectFit: 'cover'
//         }}>
//             <Form style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: '500px',
//                 padding: '50px',
//                 backgroundColor: 'rgba(120, 120, 120, 0.3)',
//                 borderRadius: '10px'
//             }}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label className='text-warning'>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label className='text-warning'>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Button variant="warning" type="submit">
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     );
// }


export default Login;