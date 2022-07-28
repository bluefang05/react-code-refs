import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from '../../images/logo.png';
function Sidebar() {
  return (
    <div className="sidebar">
        <header class="header" role="banner">

  <div class="nav-wrap">
  <Link to="/">
  <img id="menu-logo" alt="logo"  src={logo}/>
  </Link>
    <nav class="main-nav" role="navigation">
        
      <ul class="unstyled list-hover-slide">
        <li>
          <Link to="conditional-render-1">example1</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Sidebar