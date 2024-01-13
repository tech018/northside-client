import Router from "@routes";
import { createContext, useReducer } from "react";
import shopReducer from "@reducers/reducer";
import initialState from "@reducers/initialState";

export const ShopContext = createContext();

function App() {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      <Router />
    </ShopContext.Provider>
  );
}

export default App;
