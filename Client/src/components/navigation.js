import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavbarBrand, Image } from 'react-bootstrap';

import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar style={{ backgroundColor: '#1C5AB9' }} variant='dark'>
            <Container className='d-flex justify-content-between navbar' style={{
                height: '14vh',
                fontSize: '18px'
            }}>
                <NavbarBrand>
                    <Link to='/home'>
                        <Image src={Logo} width='200px' />
                    </Link>
                </NavbarBrand>

                <Nav>
                    <Nav.Link href='/home'>Home</Nav.Link>
                    <Nav.Link href='/matches'>Match Fixtures</Nav.Link>
                    <Nav.Link href='/results'>Results</Nav.Link>
                    <Nav.Link href='/teams'>Teams</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href='/register' className='text-warning'>Register</Nav.Link>
                    <Nav.Link href='/login' className='text-warning'>LogIn</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;