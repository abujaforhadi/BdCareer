import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="navbar bg-blue-100 fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <AiOutlineMenuFold />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/career">Career</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-medium text-red-600 inline-flex">
          Bd<span className="text-green-500">Career</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <>
            <div className="relative">
              <img
                src={user.photoURL || "default-avatar-url"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-sm rounded-lg">
                  {user.displayName || "User"}
                </div>
              )}
            </div>
            <button
              onClick={() => {
               
                logout(); // Call logout here
              }}
              className="btn bg-[#403F3F] text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn bg-[#403F3F] text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
