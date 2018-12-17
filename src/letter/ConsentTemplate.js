import React from 'react';
import Radium from 'radium';
import { propsCompleted } from '../utils';

const buildAssestmentPlace = (props) => {
  const x = props.assestment.place === 'home' ? props.patient.possesivePronoun : 'the';
  return `${x} ${props.assestment.place}`;
}

const buildPresence = (props) => {
  for (let person in props.presence) {
    console.log(person);
  }
}

const ConsentTemplate = props => propsCompleted(props) ?
  <p>
    I saw {props.patient.name} on {props.assestment.date} at {buildAssestmentPlace(props)} {buildPresence(props)}.
    {props.patient.name} was aware of the purpose of the assessment and consented for it
    to take place. {props.patient.name} also reported that {props.patient.pronoun} would like to know
    the outcome of the assessment.
  </p> : <p>Form not completed!</p>;

export default Radium(ConsentTemplate);
