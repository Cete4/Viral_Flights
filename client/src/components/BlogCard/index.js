import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";

function BookCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* TODO: Add images of the destination if possible */}
            {/* <Card.Img variant="left" src={props.src} /> */}
            <Card.Body>
                <Card.Title>Destination: {props.destination}</Card.Title>
                <Card.Text id="user">{props.user}</Card.Text>
                <Card.Text>{props.synopsis}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;