import types from "../types";
const { CATEGORY_GET_REQUEST, CATEGORY_GET_SUCCESS, CATEGORY_GET_FAILED } =
  types.category;

export const category_get_request = (payload = true) => {
  return {
    type: CATEGORY_GET_REQUEST,
    payload,
  };
};
export const category_get_success = (payload = true) => {
  return {
    type: CATEGORY_GET_SUCCESS,
    payload,
  };
};
export const category_get_failed = (payload = true) => {
  return {
    type: CATEGORY_GET_FAILED,
    payload,
  };
};
