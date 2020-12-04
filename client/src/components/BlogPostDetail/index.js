import React, { useEffect } from "react";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";

function BlogPostDetail(props) {

    return (
        <>{state.currentPost ? (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>
                                {state.currentPost.title} in {state.currentPost.location}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Content:</h1>
                            <p>{state.currentPost.body}</p>
                        </article>
                    </Col>
                </Row>
            </Container>
        ) : (
                <div>loading...</div>
            )}</>
    );
};

export default BlogPostDetail;