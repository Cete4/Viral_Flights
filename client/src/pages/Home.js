import React from "react";
import { Component } from "react";
import API from "../utils/flightAPI";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";
import Footer from "../components/Footer";
import "./style.css"

class Home extends Component {



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
                            <h1 id="hotflights">Hot Flights</h1>
                            <FlightsCard />
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
                    <Footer />
                </Container >
            </div >
        );
    }
}
export default Home;