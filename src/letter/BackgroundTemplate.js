import React from 'react';
import Radium from 'radium';

const buildStudies = function(props) {
  if (props.background.studies) {
    return `Studied ${props.background.studies}${props.background.haveQuitStudies ? ` but did not finished` : ''}`
  } else {
    return 'Did not have any education.';
  }
}

const buildBirth = function(props) {
  return `Born in ${props.background.birthPlace}${props.background.comingYear ? ` came to UK in ${props.background.comingYear}.` : '.'}`
}

const buildLastJob = function(props) {
  if (props.background.lastJob) {
    return `before retirement ${props.patient.pronoun} worked as ${props.background.lastJob}`
  } else {
    return `${props.patient.pronoun} did not work before retirement.`
  }
}

const BackgroundTemplate = props => {
  return (
    <strong>Personal history</strong>,
    <p>
      {buildBirth(props)} {buildStudies(props)} and {buildLastJob(props)}
    </p>
  )
}

export default Radium(BackgroundTemplate);
