import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { menus } from "@constants/menu";

const Router = () => {
  const router = createBrowserRouter(menus);
  return <RouterProvider router={router} />;
};
export default Router;
