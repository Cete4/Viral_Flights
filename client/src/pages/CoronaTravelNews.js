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

    // Load all books and store them with setBooks
    useEffect(() => {
        loadStates()
    }, [])

    // Loads all books and sets them to books
    function loadStates() {
        covidAPI.getCovidInfo()
            .then(res =>
                setStates(res),
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
                        {/* {states.map(function (state, i) {
                            return (<CoronaCard
                                key={i}
                                province={state.data.key.state}
                                date={state.data.key.date}
                                cases={state.data.key.positive}
                                newCases={state.data.key.positiveIncrease} />)
                        })} */}

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