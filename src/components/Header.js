import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link className="menulink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menulink" to="/memories">
            Memories
          </Link>
        </li>
        <li className="menulink add-new-link">Add new</li>
      </ul>
    </div>
  );
}

export default Header;
