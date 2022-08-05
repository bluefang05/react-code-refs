import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../images/logo.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <header className="header" role="banner">
        <div className="nav-wrap">
          <Link to="/">
            <img id="menu-logo" alt="logo" src={logo} />
          </Link>
          <nav className="main-nav" role="navigation">
            <ul className="unstyled list-hover-slide">
              <h5>Conditionals</h5>
              <li>
                <Link to="conditional-render-1">Conditional render 1</Link>
              </li>
              <li>
                <Link to="conditional-disable-1">Conditional disable 1</Link>
              </li>
              <li>
                <Link to="conditional-disable-1-2">
                  Conditional disable 1-2
                </Link>
              </li>
              <h5>Api Request</h5>
              <li>
                <Link to="api-request-1">Api Request 1</Link>
              </li>
              <li>
                <Link to="api-request-2">Api Request 2</Link>
              </li>
              <li>
                <Link to="api-request-3">Api Request 3</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Sidebar;
