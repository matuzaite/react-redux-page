import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const promise = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    dispatch({
      type: "FETCH_USERS",
      payload: promise.data,
    });
  };
};

export const displayUser = (id) => {
  return async (dispatch) => {
    const promise = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: "DISPLAY_USER",
      payload: promise.data,
    });
  };
};
