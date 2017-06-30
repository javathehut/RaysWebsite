import React, { Component } from 'react';
import './App.css';
import { homeImages } from './images.js';

class Slideshow extends Component {
    constructor() {
        super();
        this.state = {
            imgIndex: 0,
        }
        this.changePhoto = this.changePhoto.bind(this);
        this.carousel = this.carousel.bind(this);
    }

    changePhoto() {
        setTimeout(this.carousel(), 2000);
    }

    carousel() {
        for (let i = 0; i < homeImages.length; i ++){
            this.setState({
            imgIndex: this.state.imgIndex + 1
        })
    }
    
        if (this.state.imgIndex == homeImages.length-1) { 
            this.setState({
            imgIndex: 0
        }) }
    }



    render() {

        let imgIndex = this.state.imgIndex;
        return (
            <div>
                <div>
                    <button onClick={() => { this.changePhoto() }}>start</button>
                    <br />
                    <img className="slideshowImg" src={homeImages[imgIndex]} />
                </div>
                <div>
                    <button onClick={() => { this.changePhoto(-1) }} disabled={imgIndex == 0 ? "true" : ""} >Previous</button>
                    <span>{imgIndex + 1} of {homeImages.length}</span>
                    <button onClick={() => { this.changePhoto(1) }} disabled={imgIndex == homeImages.length - 1 ? "true" : ""} >Next</button>
                </div>
            </div>
        );
    }
}

export default Slideshow;