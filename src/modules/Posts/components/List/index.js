import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import Post from "../Post";
import { fetchPosts } from "../../actions";

const List = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <div className="post-list-body">
      {posts.map((post) => {
        return <Post key={`${post.id}${post.body}`} id={post.id} post={post} />;
      })}
    </div>
  );
};

export default List;
