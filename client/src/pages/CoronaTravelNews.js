import React from "react";
import { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import CoronaCard from "../components/CoronaCard";
import covidAPI from "../utils/covidAPI";
import Footer from "../components/Footer";
import "./style.css"


class CoronaTravelNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    search = query => {
        covidAPI.getCovidInfo()
            .then(res =>
                this.setState({
                    cards: res
                },
                    console.log(res),
                    console.log(this.state)
                ))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.search();
    }

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
                            <CoronaCard />
                        </Col>
                    </Row>
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
export default CoronaTravelNews;