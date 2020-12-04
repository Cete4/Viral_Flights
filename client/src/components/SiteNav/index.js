import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

function SiteNav() {
    return (
        <div id="outer">
            <Navbar expand="lg" id="navbar">
                <Navbar.Brand href="/">Viral Flights</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="Flights">Flights</Nav.Link>
                    <Nav.Link href="CoronaTravelNews">Corona Travel News</Nav.Link>
                    <Nav.Link href="Blog">Blog</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for Flights" className="mr-sm-2" />
                    <Button variant="outline-info" id="Search">Search</Button>
                </Form>
                <Button variant="outline-info" href="Login" id="Login">Login</Button>
                <br></br>
                <Button variant="outline-info" href="SignUp" id="Signup">Signup</Button>
            </Navbar>
        </div>
    );
}

export default SiteNav;
