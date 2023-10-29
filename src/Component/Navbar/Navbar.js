import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillExclamationCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { FaChild } from "react-icons/fa";
import Drower from "./Drower";
function Navbar() {
  return (
    <div className="navbar-container">
      <h1 className="logo">चार-धाम-यात्रा</h1>
      <ul className="nav-menu">
        {/*  For Home  */}
        <li className="menu-heading">
          <Link to={"/"}>
            <AiOutlineHome />
            Home
          </Link>
        </li>

        {/* For About */}
        <li className="menu-heading">
          <Link to={"/about"}>
            <AiFillExclamationCircle />
            About
          </Link>
        </li>

        {/* For Contact */}
        <li className="menu-heading">
          <Link to={"/contact"}>
            <AiOutlineContacts />
            Contact
          </Link>
        </li>
        {/* For services */}
        <li className="menu-heading">
          <Link to={"/service"}>
            <FcServices />
            Service
          </Link>
        </li>

        {/* for singUp */}
        <li className="menu-heading">
          <Link to={"/singup"}>
            <FaChild />
            SingUp
          </Link>
        </li>
      </ul>
      <Drower />
    </div>
  );
}

export default Navbar;
