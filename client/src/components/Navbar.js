import React from "react";

import { Link, NavLink } from "react-router-dom";
import { FaBars, FaRegWindowClose, FaHome, FaInfoCircle, FaAddressBook} from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const clickHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3 max-w-6xl mx-auto rounded-b-lg shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              Infostonk
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <FaRegWindowClose /> : <FaBars />}
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink className="nav-link" to="/" onClick={clickHandler}>
                <FaHome className="nav-link-icon" />
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about" onClick={clickHandler}>
                <FaInfoCircle className="nav-link-icon" />
                About
              </NavLink>
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={clickHandler}
              >
                <FaAddressBook className="nav-link-icon" />
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

{
  /* <ul>
  {routes.map((route) => (
    <li key={route.path}>
      <Link to={route.path}>{route.label}</Link>
    </li>
  ))}
</ul>; */
}
export default Navbar;
