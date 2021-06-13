import types from "../types";
const { CATEGORY_GET_REQUEST, CATEGORY_GET_SUCCESS, CATEGORY_GET_FAILED } =
  types.category;
const initialState = {
  categories: [],
};
const categoryReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATEGORY_GET_REQUEST: {
      return { ...state };
    }
    case CATEGORY_GET_SUCCESS: {
      return { ...state, categories: payload };
    }
    case CATEGORY_GET_FAILED: {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
export default categoryReducers;
