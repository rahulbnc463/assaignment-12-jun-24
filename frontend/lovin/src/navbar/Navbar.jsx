import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import RightDiv from "./RightDiv";

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
      <RightDiv />
    </nav>
  );
};

export default Navbar;
