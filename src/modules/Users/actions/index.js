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
