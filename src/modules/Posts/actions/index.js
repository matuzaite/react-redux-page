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
