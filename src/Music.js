import React, { Component } from 'react';
import './App.css';
import pic3 from './images/L46JH-S1QVXF4_LazarusR.jpg';

class Music extends Component {
  render() {
    return (
      <div>
        <h1>Music</h1>
        <img src={pic3} />
      </div>
    );
  }
}

export default Music;