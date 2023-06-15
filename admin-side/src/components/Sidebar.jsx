import { NavLink } from "react-router-dom";
import logo from "../assets/sidebar_logo.png";
import { useEffect, useState } from "react";
import {
  RiHome4Line,
  RiPriceTag3Line,
  RiUserAddLine,
  RiLogoutBoxLine,
  RiUser3Fill,
} from "react-icons/ri";
export default function Sidebar() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user);
      setUser({ username: user.username, email: user.email });
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div className="w-64 flex h-screen flex-col justify-between border-e bg-primary-yellow fixed">
      <div className="px-4 py-6">
        <img src={logo} alt="logo" />
        <ul className="mt-6 space-y-1">
          <li>
            <NavLink
              to={`/`}
              className={({ isActive, isPending }) =>
                `${isActive ? "bg-yellow-600" : isPending ? "" : ""}
              cursor-pointer flex rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide
              `
              }
            >
              <RiHome4Line className="self-center text-xl mr-4" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to={`/categories`}
              className={({ isActive, isPending }) =>
                `${isActive ? "bg-yellow-600" : isPending ? "" : ""}
              cursor-pointer flex rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide
              `
              }
            >
              <RiPriceTag3Line className="self-center text-xl mr-4" />
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/register-admin`}
              className={({ isActive, isPending }) =>
                `${isActive ? "bg-yellow-600" : isPending ? "" : ""}
              cursor-pointer flex rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide
              `
              }
            >
              <RiUserAddLine className="self-center text-xl mr-4" />
              Register Admin
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/login`}
              onClick={handleLogout}
              className={({ isActive, isPending }) =>
                `${isActive ? "bg-yellow-600" : isPending ? "" : ""}
              cursor-pointer flex rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 tracking-wide
              `
              }
            >
              <RiLogoutBoxLine className="self-center text-xl mr-4" />
              Sign Out
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <RiUser3Fill className="text-3xl text-primary-yellow" />
          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.username}</strong>

              <span>{user?.email} </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
