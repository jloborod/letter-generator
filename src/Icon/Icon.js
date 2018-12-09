import React, { Component } from 'react';
import './Icon.css';

export default class Icon extends Component {
  render() {
    return (
    <object data={this.props.src} type="image/svg+xml">
    </object>
    )
  }
}
