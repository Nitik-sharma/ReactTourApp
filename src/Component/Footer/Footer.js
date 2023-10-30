import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-right">
          <h2>चार-धाम-यात्रा</h2>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div className="top-left">
          <Link>
            <AiOutlineInstagram />
          </Link>
          <Link>
            <AiFillFacebook />
          </Link>
          <Link>
            <AiFillTwitterCircle />
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>

          <Link>Changelog</Link>
          <Link>Status</Link>
          <Link>License</Link>
          <Link>All various</Link>
        </div>

        <div>
          <h4>Community</h4>

          <Link>Github</Link>
          <Link>Issues</Link>
          <Link>Project</Link>
          <Link>Twitter</Link>
        </div>
        <div>
          <h4>Help</h4>

          <Link>Support</Link>
          <Link>TroubleShooting</Link>
          <Link>ContactUs</Link>
        </div>
        <div>
          <h4>Other</h4>

          <Link>Term of Service</Link>
          <Link>Privacy Policy</Link>
          <Link>License</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
