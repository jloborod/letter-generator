import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <h1 className="header">{ this.props.children }</h1>
    )
  }
}
