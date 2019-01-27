import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header>
          <a class = "header" href="https://www.google.com/"><p class = "header" >Main</p></a>
          <a class = "header" href="https://www.google.com/"><p class = "header" >About us</p></a>
        </header>
    );
  }
}

export default Header;