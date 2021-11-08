import List from "../../modules/Posts/components/List";
import PostForm from "../../modules/Posts/components/PostForm";
import "./styles.scss";
import { useSpring, animated } from "react-spring";

const PostsPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });
  return (
    <animated.div style={props}>
      <div className="posts-page-container">
        <PostForm />
        <List />
      </div>
    </animated.div>
  );
};

export default PostsPage;
