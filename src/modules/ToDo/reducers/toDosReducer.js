const initState = [];

const toDosReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    default:
      return state;
  }
};
export default toDosReducer;
