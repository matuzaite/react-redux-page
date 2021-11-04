import axios from "axios";

export const fetchToDos = () => {
  return async (dispatch, getState) => {
    const promise = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=6"
    );
    dispatch({
      type: "FETCH_TODOS",
      payload: promise.data,
    });
  };
};
