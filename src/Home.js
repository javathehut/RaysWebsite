import React, { Component } from 'react';
import './App.css';
import pic from './images/rayimg1-1.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Ray Lazarus Music</h1>
        <img src={pic}/>
      </div>
    );
  }
}

export default Home;
