import React from 'react';
import './customNavbar.scss';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
    return (
        <Navbar bg="light">
            <Navbar.Brand className="navbar-brand" href="home">
                Home
            </Navbar.Brand>
            <Nav className="navbar-items mr-auto">
                <Nav.Link href="projects">Projects</Nav.Link>
            </Nav>
            <Nav className="navbar-items">
                <Nav.Link href="impressum">Impressum</Nav.Link>
                <Nav.Link href="privacy">Datenschutzerklärung</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;
