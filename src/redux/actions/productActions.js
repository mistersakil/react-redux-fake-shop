import types from "../types";
const { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILED } = types.product;

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
