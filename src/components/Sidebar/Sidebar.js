import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from '../../images/logo.png';
function Sidebar() {
  return (
    <div className="sidebar">
        <header className="header" role="banner">

  <div className="nav-wrap">
  <Link to="/">
  <img id="menu-logo" alt="logo"  src={logo}/>
  </Link>
    <nav className="main-nav" role="navigation">
      <h5>Conditionals</h5>    
      <ul className="unstyled list-hover-slide">
        <li>
          <Link to="conditional-render-1">Conditional render 1</Link>
        </li>
        <li>
          <Link to="conditional-disable-1">Conditional disable 1</Link>
        </li>
        <li>
          <Link to="conditional-disable-1-2">Conditional disable 1-2</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Sidebar