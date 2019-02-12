import React from 'react';
import Radium from 'radium';
import { FormControl, FormLabel, Input, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import './BackgroundForm.css';

const BackgroundForm = props => (
  <form className="background-form" noValidate autoComplete="off">
    <FormControl component="fieldset">
      <FormLabel component="legend">Birth Place</FormLabel>
        <Input
          className="birth-town-input"
          onChange={props.onBirthPlaceChange}
          defaultValue={props.background.birthPlace} 
        />
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Moving year</FormLabel>
      <TextField
        className="coming-year-input"
        value={props.background.comingYear}
        onChange={props.onComingYearChange}
        type="number"
      />
    </FormControl>    

    <FormControl component="fieldset">
      <FormLabel component="legend">Studies</FormLabel>
      <Input
        className="studies-input"
        onChange={props.onStudiesChange}
        defaultValue={props.background.studies}
      />
    </FormControl>

    <FormControl component="fieldset">
        <FormControlLabel 
          className="not-finished-input"
          label="Not finished" 
          control={
            <Checkbox 
              checked={props.background.haveQuitStudies} 
              onChange={props.onHaveQuitStudiesChange} 
              value="true"
              disabled={!props.background.studies}
            />
          }
        />
    </FormControl>

    <FormControl component="fieldset">
      <FormLabel component="legend">Last job</FormLabel>
        <Input
          className="last-job-input"
          onChange={props.onLastJobChange}
          defaultValue={props.background.lastJob}
        />
    </FormControl>   
  </form>
);

export default Radium(BackgroundForm);
