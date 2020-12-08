import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import SiteNav from "../components/SiteNav";
// import BlogPostDetail from "../components/BlogPostDetail";
import Footer from "../components/Footer";
import "./style.css"

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function BlogPostDetail() {
    const [blog, setBlog] = useState({})

    const {id} = useParams()
    useEffect(() => {
      API.getBlog(id)
        .then(res => setBlog(res.data))
        .catch(err => console.log(err));
    }, [])

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
                        <Jumbotron>
                            <h1>
                                {blog.title} in {blog.location} by {blog.author}
                            </h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-10 md-offset-1">
                        <article>
                            <h1>Blog Post</h1>
                            <p>
                                {blog.blogPost}
                            </p>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/Blog">← Back to Posts</Link>
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
                <Footer />
            </Container >
        </div >
    );

}
export default BlogPostDetail;