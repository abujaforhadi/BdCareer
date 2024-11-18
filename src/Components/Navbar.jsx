import { AiOutlineMenuFold } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-100 fixed top-0 left-0 right-0 z-50 ">
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
              <NavLink to="/profile"> My Profile</NavLink>
            </li>
            <li>
              <NavLink>Home</NavLink>
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
            <NavLink to="/profile"> My Profile</NavLink>
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
        <Link className="btn">login</Link>
      </div>
    </div>
  );
};

export default Navbar;
