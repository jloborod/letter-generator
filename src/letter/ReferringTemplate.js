import React from 'react';
import Radium from 'radium';
import {propsCompleted} from '../utils';

const ReferringTemplate = (props) => {
  return (
    propsCompleted(props) ? 
      <p>Thank you for referring {props.patient.name} to the City & Hackney Diagnostic Memory Clinic 
      for investigation of {props.patient.possesivePronoun} deterioration in {props.patient.possesivePronoun} memory.</p> 
      : 
      <p>Form not completed!</p>
  )
}

export default Radium(ReferringTemplate);
