import types from "../types";
const initialState = {
  loading: true,
  error: false,
  product: {},
};
const productDetailsReducers = (state = initialState, action) => {
  const {
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
    GET_PRODUCT_DETAILS_FAILED,
  } = types.product;
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_DETAILS_REQUEST: {
      return { ...state };
    }
    case GET_PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        product: payload,
      };
    }
    case GET_PRODUCT_DETAILS_FAILED: {
      return {
        ...state,
        loading: false,
        error: true || payload,
      };
    }
    default:
      return state;
  }
};
export default productDetailsReducers;
