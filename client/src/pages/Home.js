import React, { useState, useEffect } from "react";
import flightAPI from "../utils/flightAPI";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";
import Footer from "../components/Footer";
import "./style.css"
function Home() {
    // Setting our component's initial state
    const [flights, setFlights] = useState([])
    const origin = "SFO";
    const destination = "MSP";

    // Load all states and store them with setStates
    useEffect(() => {
        function f() {
            const data = flightAPI(origin, destination).then(response => {
                console.log(response.data.Quotes);
                setFlights(response.data.Quotes);
            }).catch((error) => {
                console.log(error)
            })

        }
        f();
    }, [])

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
                    </Col>
                </Row>
                {<Row>
                    {flights && flights.map(function (flight) {
                        return (
                            <Col size="3">
                                <FlightsCard
                                    origin={origin}
                                    destination={destination}
                                    cost={flight.MinPrice}
                                    direct={flight.Direct}
                                />
                            </Col>
                        )
                    })}
                </Row>}
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
export default Home;