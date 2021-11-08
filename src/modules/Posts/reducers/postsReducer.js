const initState = [];

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return [action.payload, ...state];
    case "POST_POSTS":
      return [...state];
    default:
      return state;
  }
};

export default postsReducer;
