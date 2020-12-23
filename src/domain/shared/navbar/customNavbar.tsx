import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="projects">Projects</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;
