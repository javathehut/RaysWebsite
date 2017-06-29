import React, { Component } from 'react';
import './App.css';
import pic2 from './images/L46JH-S1QVXF4_LazarusR_01.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <img src={pic2} />
      </div>
    );
  }
}

export default About;