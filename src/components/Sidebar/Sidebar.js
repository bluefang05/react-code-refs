import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from '../../images/logo.png';
function Sidebar() {
  return (
    <div className="sidebar">
        <header class="header" role="banner">

  <div class="nav-wrap">
  <img id="menu-logo" alt="logo"  src={logo}/>
    <nav class="main-nav" role="navigation">
        
      <ul class="unstyled list-hover-slide">
        <li><Link to="conditional-render-1">example1</Link>
        </li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Sidebar