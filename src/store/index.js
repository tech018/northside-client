import { create } from "zustand";
import initialState from "./initialState";

const useAppStore = create((set) => ({
  ...initialState,
  updateProducts: (param) =>
    set((state) => ({
      ...state,
      loadingProducts: param.loading,
      products: param.data,
    })),
  filterProductItems: (param) =>
    set((state) => ({
      ...state,
      products: param,
    })),
  authUser: (params) =>
    set((state) => ({
      ...state,
      user: params,
    })),
}));

export default useAppStore;
