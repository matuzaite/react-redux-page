import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import Post from "../Post";
import { fetchPosts } from "../../actions";

const List = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());

    setIsLoaded(true);
  }, [dispatch]);

  return (
    <div className="post-list-body">
      {!isLoaded
        ? "Loading.."
        : posts.map((post) => {
            return (
              <Post key={`${post.id}${post.body}`} id={post.id} post={post} />
            );
          })}
    </div>
  );
};

export default List;
