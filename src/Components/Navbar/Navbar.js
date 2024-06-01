import React, { Component } from 'react';
import logo from "../../img/guitarologist.png";
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    // Automatically set clicked state to false
    state = {clicked: false}

    // The function to handle the click
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

  render() {
    return (
        <div>
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

            {/* Mobile navigation */}
            <div id='mobileNav'>
                {/* mobile logo */}
                <img src={logo} alt="The Guitarologist Logo" id='mobileLogo'></img>

                {/* Hamburger element for mobile navbar */}
                <div id='burger' onClick={this.handleClick}>
                    <div id='line1' className={this.state.clicked ? 'line1click' : ''}></div>
                    <div id='line2' className={this.state.clicked ? 'line2click' : ''}></div>
                    <div id='line3' className={this.state.clicked ? 'line3click' : ''}></div>
                </div>
            </div>
        </div>

      
    )
  }
}

export default Navbar;