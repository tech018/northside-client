import Home from "@pages/homepage";
import Feedbacks from "@pages/feedbacks";
import UploadImage from "@pages/dashboard/upload";
import Login from "@pages/auth";
import UserConfig from "@pages/auth/userConfig";

export const menus = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    topMenu: true,
  },
  {
    name: "Login",
    path: "/auth/login",
    element: <Login />,
    topMenu: false,
  },
  {
    name: "Feedbacks",
    path: "/feedbacks",
    element: <Feedbacks />,
    topMenu: true,
  },
  {
    name: "Customer Care",
    path: "/customercare",
    element: <UploadImage />,
    topMenu: true,
  },
  {
    name: "User Config",
    path: "/auth/userConfig",
    element: <UserConfig />,
    topMenu: false,
  },
];
