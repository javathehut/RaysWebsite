import React, { Component } from 'react';
import './App.css';
import { Nav, NavLink } from 'reactstrap';
import logo from './raylogo.png'

class App extends Component {



  render() {
    return (
      <div>
        <Nav tabs className="navbarStyle">
          <NavLink><img src={logo} className="logo" /></NavLink>
          <NavLink className="navFont">&#9776;</NavLink>
          <NavLink href="/" className="navFont">Home</NavLink>
          <NavLink href="about" className="navFont">About</NavLink>
          <NavLink href="music" className="navFont">Music</NavLink>
        </Nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
