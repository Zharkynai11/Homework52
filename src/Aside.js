import React, { Component } from 'react';
import './Aside.css';

class Aside extends Component {
  render() {
    return (
        <aside>
        <a class = "aside" href="https://www.momondo.ua/"><p class = "aside" >Momondo</p></a>
        <a class = "aside" href="http://air.kg/"><p class = "aside" >AIR KYRGYZSTAN</p></a>
        <a class = "aside" href="http://nskaero.ru/kirgizskie-avialinii"><p class = "aside" >Nskaero</p></a>
        <a class = "aside" href="https://airmanas.com/ru/"><p class = "aside" >Airmanas</p></a>
        </aside>
    );
  }
}

export default Aside;
