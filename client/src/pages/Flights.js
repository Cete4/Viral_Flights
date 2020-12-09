import React, { useState, useEffect } from "react";
import flightAPI from "../utils/flightAPI";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import FlightsCard from "../components/FlightsCard";
import Footer from "../components/Footer";
import "./style.css"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Home() {
    // Setting our component's initial state
    const [flights, setFlights] = useState([])
    //Defaults for the time being
    let origin = "MSP";
    let destination = "SFO";

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
                    <Col size="auto">
                        <h1 id="hotflights">Hot Flights</h1>
                    </Col>
                </Row>

                <Row>
                    <Col size="6">
                        <DropdownButton id="dropdown-item-button" title="Select City">
                            <Dropdown.Item as="button" value="BHM" onclick="">Birmingham</Dropdown.Item>
                            <Dropdown.Item as="button" value="ANC">Anchorage</Dropdown.Item>
                            <Dropdown.Item as="button" value="JNU" onclick="">Juneau</Dropdown.Item>
                            <Dropdown.Item as="button" value="PHX">Phoenix</Dropdown.Item>
                            <Dropdown.Item as="button" value="LIT">Little Rock</Dropdown.Item>
                            <Dropdown.Item as="button" value="LAX">Los Angeles</Dropdown.Item>
                            <Dropdown.Item as="button" value="COS">Colorado Springs</Dropdown.Item>
                            <Dropdown.Item as="button" value="HVN">New Haven</Dropdown.Item>
                            <Dropdown.Item as="button" value="FLL">Fort Lauderdale</Dropdown.Item>
                            <Dropdown.Item as="button" value="GNV">Gainesville</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Atlanta</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Honolulu</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Wichita</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Cincinnati</Dropdown.Item>
                            <Dropdown.Item as="button" value="">New Orleans</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bangor</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Boston</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Detroit</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bemidji</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Brainerd</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Duluth</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Minneapolis</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bozeman</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Las Vegas</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Atlantic City</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Albuquerque</Dropdown.Item>
                            <Dropdown.Item as="button" value="">New York</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Charlotte</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bismarck</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Columbus</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Cincinnati</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Portland</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Pittsburgh</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Philadelphia</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Charleston</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Aberdeen</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Nashville</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Dallas</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Salt Lake City</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Washington, D.C.</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col size="6">
                        <DropdownButton id="dropdown-item-button" title="Select City">
                            <Dropdown.Item as="button" value="BHM" onclick="">Birmingham</Dropdown.Item>
                            <Dropdown.Item as="button" value="ANC">Anchorage</Dropdown.Item>
                            <Dropdown.Item as="button" value="JNU" onclick="">Juneau</Dropdown.Item>
                            <Dropdown.Item as="button" value="PHX">Phoenix</Dropdown.Item>
                            <Dropdown.Item as="button" value="LIT">Little Rock</Dropdown.Item>
                            <Dropdown.Item as="button" value="LAX">Los Angeles</Dropdown.Item>
                            <Dropdown.Item as="button" value="COS">Colorado Springs</Dropdown.Item>
                            <Dropdown.Item as="button" value="HVN">New Haven</Dropdown.Item>
                            <Dropdown.Item as="button" value="FLL">Fort Lauderdale</Dropdown.Item>
                            <Dropdown.Item as="button" value="GNV">Gainesville</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Atlanta</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Honolulu</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Wichita</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Cincinnati</Dropdown.Item>
                            <Dropdown.Item as="button" value="">New Orleans</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bangor</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Boston</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Detroit</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bemidji</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Brainerd</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Duluth</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Minneapolis</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bozeman</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Las Vegas</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Atlantic City</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Albuquerque</Dropdown.Item>
                            <Dropdown.Item as="button" value="">New York</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Charlotte</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Bismarck</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Columbus</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Cincinnati</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Portland</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Pittsburgh</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Philadelphia</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Charleston</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Aberdeen</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Nashville</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Dallas</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Salt Lake City</Dropdown.Item>
                            <Dropdown.Item as="button" value="">Washington, D.C.</Dropdown.Item>
                        </DropdownButton>
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