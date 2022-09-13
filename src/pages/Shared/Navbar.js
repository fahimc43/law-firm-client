import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/log">Log</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-6 fixed top-0 z-10 backdrop-blur-sm bg-white/40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-semibold"
          tabIndex="0"
        >
          <span className="text-secondary">Law</span>
          <span className="text-primary"> ⇆ </span>
          <span className="text-secondary">Firm</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex text-base font-medium">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
}

export default Navbar;
