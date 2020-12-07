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
    // Load all states and store them with setStates
    useEffect(() => {
        function f() {
            const data = flightAPI().then(response => {
                console.log(response);
                setFlights(response.data);
            }).catch((error) => {
                  console.log(error)
                })

        }
        f();
        console.log(flights)
    }, [])
    // Loads all flights and sets them to flights
    function loadFlights() {
        // flightAPI.getFlightData()
        //     .then(response =>
        //         setFlights(response),
        //         console.log("This is the state"),
        //         console.log(flights)
        //     )
        //     .catch(err => console.log(err));
    };
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
                <Row>
                    {flights && flights.map(function (flight) {
                        return (
                            <Col size="3">
                                <FlightsCard />
                            </Col>
                        )
                    })}
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
export default Home;