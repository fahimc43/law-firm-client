import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

function Navbar() {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user ? (
        <li>
          <>
            <div className="dropdown dropdown-hover">
              <div className="avatar online placeholder">
                <div className="bg-neutral-focus text-neutral-content mask mask-squircle w-8 dropdown dropdown-hover">
                  <span className="text-lg capitalize">
                    {user?.displayName?.slice(0, 2)}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu py-1 px-3 shadow bg-base-100 rounded-box w-48 mt-40 md:mt-52 md:-ml-36"
              >
                <li>
                  <span>{user?.displayName}</span>
                </li>
                <li>
                  <Link to="/dashboard/review">Add your review</Link>
                </li>
                <li>
                  <button onClick={logout}>Sign out</button>
                </li>
              </ul>
            </div>
          </>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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

      <div className="navbar-end hidden lg:flex text-base font-normal">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="my-drawer-2"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
