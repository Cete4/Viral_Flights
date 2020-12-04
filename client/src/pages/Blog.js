import React from "react";
import { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
import BlogPostForm from "../components/BlogPostForm";
import BlogPostList from "../components/BlogPostList";
import Footer from "../components/Footer";
import "./style.css"
class Blog extends Component {

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
                        <Col size="md-6">
                            <BlogPostForm />
                        </Col>
                        <Col size="md-6 sm-12">
                            <BlogPostList />
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
export default Blog;