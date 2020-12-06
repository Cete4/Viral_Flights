import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import CoronaCard from "../components/CoronaCard";
import covidAPI from "../utils/covidAPI";
import Footer from "../components/Footer";
import "./style.css"



function CoronaTravelNews() {

    // Setting our component's initial state
    const [states, setStates] = useState([])

    // Load all states and store them with setStates
    useEffect(() => {
        loadStates()
    }, [])

    // Loads all states and sets them to states
    function loadStates() {
        covidAPI.getCovidInfo()
            .then(res =>
                setStates(res.data),
                console.log("This is the response: "),
                console.log("This is the current state: "),
                console.log(states)
            )
            .catch(err => console.log(err));
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
                        <CoronaCard />
                        {states && states.map(function (state, i) {
                            return (<CoronaCard
                                province={state.state}
                                date={state.date}
                                cases={state.positive}
                                newCases={state.positiveIncrease} />)
                        })}

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
                <br></br>
                <Footer />
            </Container >


        </div >
    );
}

export default CoronaTravelNews;