import axios from "axios";

export const fetchUserPosts = (id) => {
  return async (dispatch) => {
    const promise = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    dispatch({
      type: "FETCH_USER_POSTS",
      payload: promise.data,
    });
  };
};

export const fetchUserAlbums = (id) => {
  return async (dispatch) => {
    const promise = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/albums`
    );
    dispatch({
      type: "FETCH_USER_ALBUMS",
      payload: promise.data,
    });
  };
};

export const fetchUserTodos = (id) => {
  return async (dispatch) => {
    const promise = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}/todos`
    );
    dispatch({
      type: "FETCH_USER_TODOS",
      payload: promise.data,
    });
  };
};
