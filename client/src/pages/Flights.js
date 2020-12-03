import React from "react";
import { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";

class Flights extends Component {


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

                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}
export default Flights;