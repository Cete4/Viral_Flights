import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={props.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={props.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                {/* <Form.Group size="lg" controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={props.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group> */}
                <Button
                    href="Home"
                    block size="lg"
                    type="submit"
                    disabled={!validateForm()}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default SignUpForm;