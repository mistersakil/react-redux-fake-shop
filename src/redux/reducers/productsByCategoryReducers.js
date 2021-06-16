import types from "../types";
const {
  PRODUCTS_BY_CATEGORY_GET_REQUEST,
  PRODUCTS_BY_CATEGORY_GET_SUCCESS,
  PRODUCTS_BY_CATEGORY_GET_FAILED,
} = types;
const initialState = {
  loading: true,
  error: false,
  products: [],
};
const productsByCategoryReducers = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case PRODUCTS_BY_CATEGORY_GET_REQUEST: {
      return { ...initialState };
    }
    case PRODUCTS_BY_CATEGORY_GET_SUCCESS: {
      return { ...state, loading: false, products: payload };
    }
    case PRODUCTS_BY_CATEGORY_GET_FAILED: {
      return {
        ...state,
        loading: false,
        error: true || payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};
export default productsByCategoryReducers;
