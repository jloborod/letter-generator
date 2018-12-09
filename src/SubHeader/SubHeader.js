import React, { Component } from 'react';
import './SubHeader.css';

export default class SubHeader extends Component {
  render() {
    return (
      <span className="sub-header">{ this.props.children }</span>
    )
  }
}
