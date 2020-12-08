import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";
// import flightAPI from "../utils/flightAPI";

function BookCard(props) {
    return (
        <Card id="rootCard">
            {/* TODO: Add images of the destination if possible */}
            {/* <Card.Img variant="left" src={props.src} /> */}
            <Card.Body>
                <Card.Title>Flight: {props.destination}</Card.Title>
                <Card.Text id="heavy">Cost: <p>{props.cost}</p></Card.Text>
                <Card.Text id="heavy">Date: <p>{props.Date}</p></Card.Text>
                <Card.Text id="heavy">Link: <a href={props.link} target={"_blank"} rel="noopener noreferrer">{props.link}</a></Card.Text>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;