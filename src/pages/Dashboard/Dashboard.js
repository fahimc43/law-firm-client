import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hook/useAdmin";

function Dashboard() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content mt-16 bg-[#f5ecf2] p-4">
            {/* <!-- Page content here --> */}
            <Outlet />
          </div>
          <div className="drawer-side mt-16">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80  text-base-content">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/dashboard">My appointment</Link>
              </li>
              <li>
                <Link to="/dashboard/review">My review</Link>
              </li>
              {admin && (
                <>
                  <li>
                    <Link to="/dashboard/users">All users</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/services">Add Service</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageService">Manage Service</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
