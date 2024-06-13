import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import RightDiv from "./RightDiv";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">Lovin.</div>
      </div>
      <div className="navbar-search">
        <div className="search-container">
          <CiSearch className="search-icon" />
          <input type="text" placeholder="Search Product" />
        </div>
      </div>
      <div className="right-div">
        <RightDiv />
      </div>
      <div className="menu">
        <IoMenuSharp />

        <div>Menu</div>
      </div>
    </nav>
  );
};

export default Navbar;
