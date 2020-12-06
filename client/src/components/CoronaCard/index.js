import React from "react";
import { Card } from 'react-bootstrap';
import "./style.css";

function coronaCard(props) {
    return (
        <div >
            <Card id="rootCard">
                {/* TODO: Add images of the destination if possible */}
                {/* <Card.Img variant="left" src={props.src} /> */}
                <Card.Body>
                    <Card.Title>State: {props.province}</Card.Title>
                    <Card.Text>Date: {props.date}</Card.Text>
                    <Card.Text>Total Cases: {props.cases}</Card.Text>
                    <Card.Text>New Cases: {props.newCases}</Card.Text>
                    <Card.Text></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default coronaCard;