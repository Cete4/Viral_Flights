import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';

function SiteNav() {
    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Viral Flights</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="Flights">Flights</Nav.Link>
                    <Nav.Link href="CoronaTravelNews">Corona Travel News</Nav.Link>
                    <Nav.Link href="Blog">Blog</Nav.Link>
                    <Nav.Link href="LoginSignUp">Login or Sign Up</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search for Flights" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}

export default SiteNav;
