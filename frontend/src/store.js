import { postReducer } from "./reducers/postReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore(postReducer, applyMiddleware(thunk));
