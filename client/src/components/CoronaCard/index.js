import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";

function BookCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* TODO: Add images of the destination if possible */}
            {/* <Card.Img variant="left" src={props.src} /> */}
            <Card.Body>
                <Card.Title>State: </Card.Title>
                <Card.Text>Date: </Card.Text>
                <Card.Text>Total Cases: </Card.Text>
                <Card.Text>New Cases: </Card.Text>
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BookCard;