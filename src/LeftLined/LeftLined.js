import React, { Component } from 'react';
import './LeftLined.css';

export default class LeftLined extends Component {
  render() {
    return (
      <div className={this.props.wrapClassName}>
        <div className="left-lined">{ this.props.children }</div>
      </div>
    )
  }
}
