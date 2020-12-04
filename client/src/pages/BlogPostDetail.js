import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import BlogPostDetail from "../components/BlogPostDetail";

class DetailPage extends Component {

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
                            <BlogPostDetail />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-2">
                            <Link to="/">← Back to Posts</Link>
                        </Col>
                    </Row>
                </Container >
            </div >
        );
    }
}
export default DetailPage;