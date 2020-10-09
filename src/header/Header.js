import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Climate Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <NavDropdown title="Other options" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#emission">Emissions</NavDropdown.Item>
                    <NavDropdown.Item href="#carbon_budget">Carbon Budget</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/thk123/climate-dashboard" target="_blank">Contribute</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Header;