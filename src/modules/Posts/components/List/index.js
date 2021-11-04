import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import Post from "../Post";
import { fetchPosts } from "../../actions";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const addPostHandle = () => {
    document.querySelector(".add-btn").style.display = "none";
    document.querySelector(".post-container").style.display = "flex";
  };

  return (
    <div className="post-list-body">
      <button className="add-btn btn" onClick={addPostHandle}>
        Add a post
      </button>
      <div className="post-container">
        <textarea id="input-a" type="text" />
        <button className="btn post-btn">POST</button>
      </div>
      {posts.map((post) => {
        return <Post key={`${post.id}${post.title}`} post={post} />;
      })}
    </div>
  );
};

export default PostList;
