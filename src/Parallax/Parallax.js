import React, { Component } from 'react';
import './Parallax.css';



export default class Parallax extends Component {
  style = {
    backgroundImage: 'url(' + this.props.img + ')',
  };

  render() {
    return (
      <div style={this.style} className="parallax">
        {this.props.children}
      </div>
    )
  }
}

