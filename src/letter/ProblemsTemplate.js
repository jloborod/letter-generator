import React from 'react';
import Radium from 'radium';
import { Typography } from '@material-ui/core';

const ProblemsTemplate = props => {
  return (
    <h2>presenting problems</h2>,
    <Typography component="h2" variant="h1" gutterBottom>Presenting Problems</Typography>,
    <p>
      Here problems selected
    </p>
  )
}

export default Radium(ProblemsTemplate);
