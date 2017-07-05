import React, { Component } from 'react';
import './App.css';
import { homeImages } from './images.js';

class Slideshow extends Component {
    constructor() {
        super();
        this.state = {
            imgIndex: 0,
        }
        this.carousel = this.carousel.bind(this);
    }


    carousel() {
            this.setState({
                imgIndex: this.state.imgIndex + 1
            })
        if (this.state.imgIndex == homeImages.length - 1) {
            this.setState({
                imgIndex: 0
            })
        }
    }

    componentDidMount(){
        setInterval(() => { this.carousel() }, 3000);
    }


    render() {

        let imgIndex = this.state.imgIndex;

        return (
            <div>
                <div>
                    <span>{imgIndex + 1} of {homeImages.length}</span>
                </div>
                <div>
                    <img className="slideshowImg" src={homeImages[imgIndex]} />
                </div>
            </div>
        );
    }
}

export default Slideshow;