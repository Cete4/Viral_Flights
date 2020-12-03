import React from "react";
import { Component } from "react";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
// import FlightsCard from "../components/FlightsCard";
<<<<<<< HEAD:client/src/pages/LoginSignUp.js
// import LoginSignForm from "../components/LoginSignForm";
=======
import LoginForm from "../components/LoginForm";
>>>>>>> 5e4bb31c68c56231d98a11eb42f5a8604aad0a6e:client/src/pages/Login.js

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