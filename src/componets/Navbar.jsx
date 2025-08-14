import React from "react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 mx-0 mb-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <HashLink to="#home">
              <li>Home</li>
            </HashLink>
            <HashLink to="#about">
              <li>About</li>
            </HashLink>
            <HashLink to="#education">
              <li>Education</li>
            </HashLink>
            <HashLink to="#skills">
              <li>Skills</li>
            </HashLink>
            <HashLink to="#projects">
              <li>Projects</li>
            </HashLink>
            <HashLink to="#contact">
              <li>Contact</li>
            </HashLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Abul-Kalam</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center gap-7">
          <HashLink to="#home">
            <li>Home</li>
          </HashLink>
          <HashLink to="#about">
            <li>About</li>
          </HashLink>
          <HashLink to="#education">
            <li>Education</li>
          </HashLink>
          <HashLink to="#skills">
            <li>Skills</li>
          </HashLink>
          <HashLink to="#projects">
            <li>Projects</li>
          </HashLink>
          <HashLink to="#contact">
            <li>Contact</li>
          </HashLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
