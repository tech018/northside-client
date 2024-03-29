/* eslint-disable react-refresh/only-export-components */
import { menus } from "@constants/menu";
import { Link, useNavigate } from "react-router-dom";
import useAppStore from "@store";
import { memo } from "react";

const Menu = () => {
  const { user } = useAppStore((state) => ({
    user: state.user,
  }));

  const filteredMenu = menus.filter((i) => {
    if (user === null) {
      return !i.auth;
    } else {
      return i;
    }
  });

  const navigation = useNavigate();
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-10 py-02 z-10">
      <img src="/logo.png" className="h-12 p-1" alt="logo" />

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center justify-center ">
          {filteredMenu
            .filter((i) => i.topMenu !== false)
            .map((item) => (
              <li
                key={item.name}
                className="text-sm uppercase mx-3 mt-1 border-b-2 border-green-500 border-opacity-0  duration-200 cursor-pointer  hover:border-opacity-100 hover:text-green-500"
              >
                <Link to={`${item.path}`} className="inline-flex gap-1">
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <div className=" flex justify-end item-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {user !== null ? (
          <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src={user.photoURL}
            alt=""
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigation("/auth/login")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default memo(Menu);
