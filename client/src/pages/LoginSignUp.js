import React from "react";
import { Component } from "react";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/siteNav";
// import FlightsCard from "../components/FlightsCard";
import LoginSignForm from "./components/LoginSignForm";

class Login extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Navbar />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <LoginSignForm />
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}

export default Login;