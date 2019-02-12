import React from 'react';
import Radium from 'radium';

const ReferringTemplate = props => 
  <p>Thank you for referring {props.patient.name} to the City & Hackney Diagnostic Memory Clinic
  for investigation of {props.patient.possesivePronoun} deterioration in {props.patient.possesivePronoun} memory.</p>

export default Radium(ReferringTemplate);
