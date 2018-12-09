import React, { Component } from 'react';
import './Block.css';

export default class Block extends Component {
  render() {
    return (
      <div className="block">{ this.props.children }</div>
    )
  }
}
