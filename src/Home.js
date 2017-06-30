import React, { Component } from 'react';
import './App.css';
import Slideshow from './Slideshow.js'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Ray Lazarus Music</h1>
        <Slideshow />
      </div>
    );
  }
}

export default Home;
