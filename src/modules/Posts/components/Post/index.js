import React from "react";
import "./styles.scss";
import { useSpring, animated } from "react-spring";

const Post = ({ post }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 300,
  });

  return (
    <animated.div style={props}>
      <div className="post-body">
        <h1 className="author">{post.id}</h1>
        <p>{post.body}</p>
      </div>
    </animated.div>
  );
};

export default Post;
