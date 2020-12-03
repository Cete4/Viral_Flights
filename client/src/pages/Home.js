import React from "react";
import { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";

class Home extends Component {

    search = query => {
        API.get(query)
            .then(res =>
                this.setState(
                    {
                        flights: res.data.items,
                        search: ""
                    },
                    console.log(res.data.items)
                ))
            .catch(err => console.log(err));
    };

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
                            <h1 id="hotflights">Hot Flights</h1>
                            <FlightsCard />
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}
export default Home;