import { postReducer } from "./reducers/postReducer";
import { filterReducer } from "./reducers/filterReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// const reducer = combineReducers({
// 	posts: postReducer,
// 	filter: filterReducer,
// });

export const store = createStore(postReducer, applyMiddleware(thunk));
