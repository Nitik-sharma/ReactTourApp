import * as React from "react";
import { useState } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillExclamationCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { FcServices } from "react-icons/fc";
import { FaChild } from "react-icons/fa";
import "./Navbar.css";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-view">
      <IconButton onClick={onOpen}>
        <MenuRoundedIcon className="hams" />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
      >
        <div className="drawer-div">
          <Link to={"/"}>
            <AiOutlineHome />
            Home
          </Link>

          <Link to={"/about"}>
            <AiFillExclamationCircle />
            About
          </Link>

          <Link to={"/contact"}>
            <AiOutlineContacts />
            Contact
          </Link>

          <Link to={"/service"}>
            <FcServices />
            Service
          </Link>

          <Link to={"/SingUp"}>
            <FaChild />
            SingUp
          </Link>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
