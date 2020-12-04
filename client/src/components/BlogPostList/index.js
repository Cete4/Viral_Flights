import React from "react";
import { ListItem, List } from "../List";
import { Link } from "react-router-dom";

const PostsList = () => {
  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {[].length ? (
        <List>
          {[].map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} in {post.location}
                </strong>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't written any posts yet!</h3>
      )}
    </div>
  );
};

export default PostsList;