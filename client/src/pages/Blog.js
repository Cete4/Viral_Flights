import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

import SiteNav from "../components/SiteNav";
// // import BlogPostForm from "../components/BlogPostForm";
import Footer from "../components/Footer";
import "./style.css"


function Blog() {
    // Setting our component's initial state
    const [blogs, setBlogs] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBlogs()
    }, [])

    // Loads all books and sets them to books
    function loadBlogs() {
        API.getBlogs()
            .then(res =>
                setBlogs(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBlog(id) {
        API.deleteBlog(id)
            .then(res => loadBlogs())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.location && formObject.author) {
            API.saveBlog({
                title: formObject.title,
                location: formObject.location,
                author: formObject.author,
                blogPost: formObject.blogPost
            })
                .then(res => loadBlogs())
                .catch(err => console.log(err))
            window.alert("Your blog has been posted!");
        }
    };

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
                        <Jumbotron>
                            <h1>Travel Blog</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                onChange={handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="location"
                                placeholder="Location (required)"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="author"
                                placeholder="Author (required)"
                            />
                            <TextArea
                                onChange={handleInputChange}
                                name="blogPost"
                                placeholder="Blog Post (optional)"
                            />
                            <FormBtn
                                disabled={!(formObject.author && formObject.location && formObject.title)}
                                onClick={handleFormSubmit}
                            >
                                Submit Post
                            </FormBtn>
                        </form>
                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <h1>Blog Posts</h1>
                        </Jumbotron>
                        {blogs.length ? (
                            <List>
                                {blogs.map(blog => (
                                    <ListItem key={blog._id}>
                                        <Link to={"/blogs/" + blog._id}>
                                            <strong>
                                                {blog.title} in {blog.location}
                                            </strong>
                                        </Link>
                                        <DeleteBtn onClick={() => deleteBlog(blog._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
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

};

export default Blog;