import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
const initialState = {};
export default createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);
