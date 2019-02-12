import React from 'react';
import Radium from 'radium';
import { FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox } from '@material-ui/core';
import './ProblemsForm.css';

const ProblemsForm = props => (
  <form className="problems-form" noValidate autoComplete="off">
    <FormControl component="fieldset">
      <FormLabel component="legend">Presenting Problems</FormLabel>
      <FormGroup>
        <FormControlLabel label="Apetite reduced" control={<Checkbox checked={props.problems.apetiteReduced} onChange={props.onProblemsChange} value="apetiteReduced" />} />
        <FormControlLabel label="Poor short-term memory" control={<Checkbox checked={props.problems.poorShortTermMemory} onChange={props.onProblemsChange} value="poorShortTermMemory" />} />
        <FormControlLabel label="Risk of aggression" control={<Checkbox checked={props.problems.riskAggression} onChange={props.onProblemsChange} value="riskAggression" />} />
        <FormControlLabel label="Risk of fire" control={<Checkbox checked={props.problems.riskFire} onChange={props.onProblemsChange} value="riskFire" />} />
        <FormControlLabel label="Forgetting medication" control={<Checkbox checked={props.problems.forgettingMedication} onChange={props.onProblemsChange} value="forgettingMedication" />} />
      </FormGroup>
    </FormControl>
  </form>
);

export default Radium(ProblemsForm);
