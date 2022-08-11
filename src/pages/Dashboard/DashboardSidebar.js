import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    
    <div class='drawer drawer-mobile mt-16 bg-accent'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
        <Link to="/" className="mb-5">
          <button
            className="bg-yellow-500 hover:bg-[#f2a70c] hover:shadow-md text-black px-4 py-2 rounded-full flex gap-3 items-center w-44"
          >
            <BsArrowLeft className="text-xl"></BsArrowLeft> Back to home 
          </button>
        </Link>
          <li>
            <NavLink to='/dashboard/add-user'>Add User</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/add-admin'>Add Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
