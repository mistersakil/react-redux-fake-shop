import types from "../types";
const initialState = {
  loading: true,
  error: false,
  products: [],
};
const productReducers = (state = initialState, action) => {
  const { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST } =
    types.product;
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT_REQUEST: {
      return { ...state };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case GET_PRODUCT_FAILED: {
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
export default productReducers;
