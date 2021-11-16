import React, { useEffect } from "react";
import Post from "../../../Posts/components/Post";
import "./styles.scss";
import { fetchUserPosts } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Posts = ({ user }) => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserPosts(user.id));
  }, [dispatch, user.id]);

  return (
    <div className="user-posts-container">
      <div className="user-posts">
        {details.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
