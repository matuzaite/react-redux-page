import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postsReducer from "../../modules/Posts/reducers/postsReducer";
import toDosReducer from "../../modules/ToDo/reducers/toDosReducer";
import usersReducer from "../../modules/Users/reducers/usersReducer";
import userDetailsReducer from "../../modules/Details/reducers";
import logger from "redux-logger";

const allReducers = combineReducers({
  posts: postsReducer,
  todos: toDosReducer,
  users: usersReducer,
  details: userDetailsReducer,
});

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
