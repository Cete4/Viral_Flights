import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";

function BlogPostForm() {
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

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
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
        windows.alert("Your blog post has submitted!");
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Past Travel Blog!</h1>
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
              placeholder="Blogger (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="blogPost"
              placeholder="Blog Post (optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.location)}
              onClick={handleFormSubmit}
            >
              Submit Post
              </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Blog Post List</h1>
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
              <div class="card bg-light">
                <div class="card-body">
                  <h3>No Results to Display</h3>
                </div>
              </div>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default BlogPostForm;