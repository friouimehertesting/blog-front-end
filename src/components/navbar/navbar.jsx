import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="logo">Blog</div>
      </div>
      <div className="navbarCenter">
        <div className="item">
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="navbarRight">
        <div className="item">
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="item">
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
