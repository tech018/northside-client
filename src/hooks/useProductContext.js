import { useContext } from "react";
import { ShopContext } from "../App";

const useIncrementContext = () => {
  return useContext(ShopContext);
};

export default useIncrementContext;
