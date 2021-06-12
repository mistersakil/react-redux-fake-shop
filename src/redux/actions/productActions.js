import types from "../types";
const {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAILED,
} = types.product;
export const get_product_request = (payload = true) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload,
  };
};

export const get_product_success = (payload = true) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};
export const get_product_failed = (payload = true) => {
  return {
    type: GET_PRODUCT_FAILED,
    payload,
  };
};
export const get_product_details_request = (payload = true) => {
  return {
    type: GET_PRODUCT_DETAILS_REQUEST,
    payload,
  };
};

export const get_product_details_success = (payload = true) => {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload,
  };
};

export const get_product_details_failed = (payload = true) => {
  return {
    type: GET_PRODUCT_DETAILS_FAILED,
    payload,
  };
};
