import React, { Component } from 'react';
import '../App.css'

class Hero extends Component {
  render() {
    return (
      <div id="hero"> 
        <h1 className="hero-text">Welcome to My PLAYLIST!</h1>
        <h3 className="subtitle"> To go straight to the app just click on 'player' on the upper right corner </h3> 
      </div>
    );
  };
}

export default Hero;