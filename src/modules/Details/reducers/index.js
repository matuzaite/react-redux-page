const initState = [];

const userDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USER_POSTS":
      return action.payload;
    case "FETCH_USER_ALBUMS":
      return action.payload;
    case "FETCH_USER_TODOS":
      return action.payload;
    default:
      return state;
  }
};

export default userDetailsReducer;
