import types from "../types";

const {
  PRODUCTS_BY_CATEGORY_GET_REQUEST,
  PRODUCTS_BY_CATEGORY_GET_SUCCESS,
  PRODUCTS_BY_CATEGORY_GET_FAILED,
} = types;

export const productsByCategoryGetRequest = (payload = true) => {
  return {
    type: PRODUCTS_BY_CATEGORY_GET_REQUEST,
    payload,
  };
};
export const productsByCategoryGetSuccess = (payload = true) => {
  return {
    type: PRODUCTS_BY_CATEGORY_GET_SUCCESS,
    payload,
  };
};

export const productsByCategoryGetFailed = (payload = true) => {
  return {
    type: PRODUCTS_BY_CATEGORY_GET_FAILED,
    payload,
  };
};
