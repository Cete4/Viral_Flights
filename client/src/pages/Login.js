import React from "react";
import { Component } from "react";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
// import FlightsCard from "../components/FlightsCard";
import LoginForm from "../components/LoginForm";

class Login extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <SiteNav />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <LoginForm />
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}

export default Login;