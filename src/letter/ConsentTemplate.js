import React from 'react';
import Radium from 'radium';

const buildAssestmentPlace = (props) => {
  const x = props.assestment.place === 'home' ? props.patient.possesivePronoun : 'the';
  return `${x} ${props.assestment.place}`;
}

const buildPresence = (props) => {
  const isAlone = Object.values(props.presence.relatives).every(person => !!person === false)
   && Object.values(props.presence.workers).every(person => !!person === false);
  if (isAlone) {
    return ' alone';
  } else {
    const workersArray = Object.values(props.presence.workers)
      .filter(person => person !== '')
      .map(person => `${person} (Clinic worker)`)
    const sentence = Object.keys(props.presence.relatives)
      .filter(person => !!props.presence.relatives[person] !== false)
      .map(person => `${props.patient.possesivePronoun} ${person}`)
      .concat(workersArray)
      .map((person, index, array) => {
        if(index === array.length - 1) { // Last
          return `and ${person}`;
        } else {
          return `${person}`
        }
      })
      .reduce((prevVal, currVal, index, array) =>  { return index === array.length - 1 ?
        `${prevVal} ${currVal}`: `${prevVal}, ${currVal}`}, []);
    return `${sentence} was also present`;
  }
}

const ConsentTemplate = props => 
  <p>
    I saw {props.patient.name} on {props.assestment.date} at {buildAssestmentPlace(props)}
    {buildPresence(props)}. {props.patient.name} was aware of the purpose of the assessment and consented for it
    to take place. {props.patient.name} also reported that {props.patient.pronoun} would like to know
    the outcome of the assessment.
  </p>

export default Radium(ConsentTemplate);
