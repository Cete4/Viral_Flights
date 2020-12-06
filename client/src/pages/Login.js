import React from "react";
import { Component } from "react";
// import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
// import FlightsCard from "../components/FlightsCard";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import "./style.css"
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Footer />
                </Container >
            </div >
        );
    }
}

export default Login;