import axios from "axios";

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const promise = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=50"
    );
    dispatch({
      type: "FETCH_POSTS",
      payload: promise.data,
    });
  };
};

export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

export const postPosts = (userData) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", userData)
      .then((response) => {
        console.log(response);
        dispatch({
          type: "POST_POSTS",
          payload: response,
        });
      });
  };
};
