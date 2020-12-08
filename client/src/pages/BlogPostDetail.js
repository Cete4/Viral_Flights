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

    const { id } = useParams()
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
                            <h1>{blog.title} in {blog.location}</h1>
                            <h2>Written by {blog.author}</h2>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12" style="backgroundColor:white">
                        <article>
                            <div class="card">
                                <div class="card-body">
                                    <h1>Blog Post</h1>
                                    <p>
                                        {blog.blogPost}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <a class="btn btn-light" href="/Blog" role="button">← Back to Posts</a>
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