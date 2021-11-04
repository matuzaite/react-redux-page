import React from "react";
import "./styles.scss";

const Post = ({ post }) => {
  return (
    <div className="post-body">
      <h3 className="author">{post.id}</h3>
      <p className="post">{post.body}</p>
    </div>
  );
};

export default Post;
