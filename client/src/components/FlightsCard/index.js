import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";
// import flightAPI from "../utils/flightAPI";

function BookCard(props) {
    let str = "";
    if (props.direct === true) {
        str = "True";
    } else {
        str = "False";
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return (
        <Card id="rootCard">
            {/* TODO: Add images of the destination if possible */}
            {/* <Card.Img variant="left" src={props.src} /> */}
            <Card.Body>
                <Card.Title>Flight: {props.destination}</Card.Title>
                <Card.Text id="heavy">Cost: ${props.cost}</Card.Text>
                <Card.Text id="heavy">Date: {today}</Card.Text>
                <Card.Text id="heavy">Direct Flight: {str}</Card.Text>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;