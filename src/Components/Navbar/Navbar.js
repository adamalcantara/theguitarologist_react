import React, { Component } from 'react';
import logo from "../../img/guitarologist.png";
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div id='navbar'>
        {/* Logo */}
        <img src={logo} alt="The Guitarologist Logo" id="logo"></img>
        {/* Mobile Nav */}
        {/* Nav */}
        <ul id='navigation'>
            <li><Link className='menuItem'>My Work</Link></li>
            <li><Link className='menuItem'>About</Link></li>
            <li><Link className='menuItem'>Contact</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;