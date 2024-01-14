import { create } from "zustand";
import initialState from "./initialState";

const useAppStore = create((set) => ({
  ...initialState,
  updateAuth: (param) =>
    set((state) => ({
      ...state,
      user: param,
    })),
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
}));

export default useAppStore;
