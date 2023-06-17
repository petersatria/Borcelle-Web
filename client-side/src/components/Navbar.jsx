import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavbarComponent() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-28 mr-3" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2">
          <Link to={"/menus"}>
            <button
              type="button"
              className="text-white bg-primary-yellow hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-normal rounded-sm text-md tracking-widest px-6 py-3 text-center mr-3 md:mr-0 "
            >
              Our Menu
            </button>
          </Link>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <NavLink
                to={"/"}
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-yellow md:p-0 text-lg tracking-wider font-normal"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-yellow md:p-0 text-lg tracking-wider font-normal"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-yellow md:p-0 text-lg tracking-wider font-normal"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/"}
                className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary-yellow md:p-0 text-lg tracking-wider font-normal"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
