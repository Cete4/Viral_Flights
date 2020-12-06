import React from "react";
import { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";
import Footer from "../components/Footer";
import "./style.css"
// import flightAPI from "../utils/flightAPI";
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
                            <FlightsCard />
                        </Col>
                    </Row>
                    {/* <h1> {flightAPI.axios} Some text </h1> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Footer />
                    <br></br>
                </Container >
            </div >
        );
    }
}
export default Flights;