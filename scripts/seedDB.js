const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const blogPostSeed = [
  {
    title: "Jersey Shore Tho",
    location: "New Jersey",
    author: "Blog Poster 1",
    blogPost:
      "This trip was okay.",
    date: new Date(Date.now())
  },
  {
    title: "Disney in Orlando",
    location: "Florida",
    author: "Test Blogger",
    blogPost:
      "I love Disney World, but I don't feel safe going there in this COVID season",
    date: new Date(Date.now())
  },
  {
    title: "California without Flames",
    location: "California",
    author: "West Sider",
    blogPost:
      "California (at least when it's not carrying a bunch of fires) is really fun and chill to visit.",
    date: new Date(Date.now())
  },
  {
    title: "Minnesota or Minnepop?",
    location: "Minnesota",
    author: "Fishiy Blogger",
    blogPost:
      "I LOVE MN. That is all that is needed.",
    date: new Date(Date.now())
  }
];

db.Blog
  .remove({})
  .then(() => db.Blog.collection.insertMany(blogPostSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });