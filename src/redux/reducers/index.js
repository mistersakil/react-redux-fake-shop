import { combineReducers } from "redux";
import productReducers from "./productReducers";
import productDetailsReducers from "./productDetailsReducers";
import categoryReducers from "./categoryReducers";

export default combineReducers({
  productReducers,
  productDetailsReducers,
  categoryReducers,
});
