import React from 'react';
import Radium from 'radium';
import './Cover.css'

const isValid = props => Object.values(props).every(propValue => !(!propValue || 0 === propValue.trim().length));

const Cover = props => <div className={isValid(props.validation) ? 'revealed cover' : 'covered cover'}>{props.children}</div>

export default Radium(Cover);
