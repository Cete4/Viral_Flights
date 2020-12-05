import React from "react";

const BlogPostForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required placeholder="Title" />
        <input className="form-control mb-5" required placeholder="Location" />
        <textarea className="form-control mb-5" required placeholder="Blog Post" />
        <input className="form-control mb-5" placeholder="Blogger Name" />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default BlogPostForm;