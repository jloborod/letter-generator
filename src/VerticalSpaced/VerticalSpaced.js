import React, { Component } from 'react';
import './VerticalSpaced.css';

export default class VerticalSpaced extends Component {
  render() {
    return (
      <div className="vertical-spaced">{ this.props.children }</div>
    )
  }
}
