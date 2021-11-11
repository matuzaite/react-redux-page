const initState = [];

const toDosReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;
    case "DISPLAY_USER":
      return action.payload;
    default:
      return state;
  }
};

export default toDosReducer;
