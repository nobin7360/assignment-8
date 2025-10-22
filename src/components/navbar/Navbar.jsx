import React from "react";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {

  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <Link to="/apps">
        <li className="m-2">Apps</li>
      </Link>
      <Link to="/installation">
        <li className="m-2">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <img className="w-[40px]" src="/src/assets/logo.png" alt="" />
        <a className="text-lg font-bold gradient-text" href="/">
          HERO.IO
        </a>
      </div>
      <div className="navbar-center">
        <div className="flex lg:hidden md:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer lg:hidden text-3xl"
            >
              <FaBars />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex md:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
              {links}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/no-Bin-not"><button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
          <FaGithub />
          Contribute
        </button></a>
      </div>
    </div>
  );
};

export default Navbar;
