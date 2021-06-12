import { combineReducers } from "redux";
import productReducers from "./productReducers";
import productDetailsReducers from "./productDetailsReducers";

export default combineReducers({ productReducers, productDetailsReducers });
