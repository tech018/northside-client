import Home from "@pages/homepage";
import Feedbacks from "@pages/feedbacks";
import UploadImage from "../pages/dashboard/upload";
import Login from "../pages/auth";
import ProfileConfig from "../pages/auth/config";

export const menus = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
    topmenu: true,
  },
  {
    name: "Profile Config",
    path: "/auth/profileconfig",
    element: <ProfileConfig />,
    topmenu: false,
  },
  {
    name: "Login",
    path: "/auth/login",
    element: <Login />,
    topmenu: false,
  },
  {
    name: "Feedbacks",
    path: "/feedbacks",
    element: <Feedbacks />,
    topmenu: true,
  },
  {
    name: "Customer Care",
    path: "/customercare",
    element: <UploadImage />,
    topmenu: true,
  },
];
