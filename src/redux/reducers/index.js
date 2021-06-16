import { combineReducers } from "redux";
import productReducers from "./productReducers";
import productDetailsReducers from "./productDetailsReducers";
import categoryReducers from "./categoryReducers";
import productsByCategoryReducers from "./productsByCategoryReducers";

export default combineReducers({
  productReducers,
  productDetailsReducers,
  categoryReducers,
  productsByCategoryReducers,
});
