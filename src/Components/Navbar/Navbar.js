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
                {/* Nav */}
                <ul id='navigation'>
                    <li><Link to="/" className='menuItem'>My Work</Link></li>
                    <li><Link to="/about" className='menuItem'>About</Link></li>
                    <li><Link to="/contact" className='menuItem'>Contact</Link></li>
                </ul>
            </div>

            {/* Mobile navigation */}
            <div id='mobileNav'>
                <div id='mobileHeader'>
                    {/* mobile logo */}
                    <img src={logo} alt="The Guitarologist Logo" id='mobileLogo'></img>

                    {/* Hamburger element for mobile navbar */}
                    <div id='burger' onClick={this.handleClick}>
                        <div id='line1' className={this.state.clicked ? 'line1click' : ''}></div>
                        <div id='line2' className={this.state.clicked ? 'line2click' : ''}></div>
                        <div id='line3' className={this.state.clicked ? 'line3click' : ''}></div>
                    </div>
                </div>

                <div className={this.state.clicked ? 'navbar active' : 'navbar'}>
                    <Link to="/" className='mobileItem' onClick={this.handleClick}>My Work</Link>
                    <Link to="/about" className='mobileItem' onClick={this.handleClick}>About</Link>
                    <Link to="/contact" className='mobileItem' onClick={this.handleClick}>Contact</Link>
                </div>
            </div>
        </div>

      
    )
  }
}

export default Navbar;