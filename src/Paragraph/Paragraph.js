import React, { Component } from 'react';
import './Paragraph.css';

export default class Paragraph extends Component {
  render() {
    return (
      <div className="paragraph">{ this.props.children }</div>
    )
  }
}
