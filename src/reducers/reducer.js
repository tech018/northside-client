import ProductsTypes from "./types";
const shopReducer = (state, action) => {
  const { GET_PRODUCT, FILTER_PRODUCTS } = ProductsTypes;
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        loadingProducts: action.payload.loading,
        products: action.payload.data,
        errorGetProducts: action.payload.error,
      };
    case FILTER_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      throw new Error();
  }
};

export default shopReducer;
