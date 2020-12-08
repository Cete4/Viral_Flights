import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

function BlogPostDetail(props) {
    const [blog, setBlog] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getBlog(id)
            .then(res => setBlog(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>
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
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
};

export default BlogPostDetail;