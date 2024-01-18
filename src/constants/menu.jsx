import Home from "@pages/homepage";
import Feedbacks from "@pages/feedbacks";
import UploadImage from "@pages/dashboard/upload";
import Login from "@pages/auth";
import UserConfig from "@pages/auth/userConfig";
import Dashboard from "@pages/dashboard";
import SingleProduct from "../pages/product/singleProduct";

export const menus = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    topMenu: true,
    auth: false,
  },
  {
    name: "Login",
    path: "/auth/login",
    element: <Login />,
    topMenu: false,
    auth: false,
  },
  {
    name: "Feedbacks",
    path: "/feedbacks",
    element: <Feedbacks />,
    topMenu: true,
    auth: false,
  },
  {
    name: "Customer Care",
    path: "/customercare",
    element: <UploadImage />,
    topMenu: true,
    auth: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
    topMenu: true,
    auth: true,
  },
  {
    name: "User Config",
    path: "/auth/userConfig",
    element: <UserConfig />,
    topMenu: false,
    auth: false,
  },
  {
    name: "Single Product",
    path: "/product",
    element: <SingleProduct />,
    topMenu: false,
    auth: false,
  },
];
