import React from "react";
import { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import FlightsCard from "../components/FlightsCard";

class TemplatePage extends Component {


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

                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}
export default TemplatePage;