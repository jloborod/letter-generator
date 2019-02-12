import React from 'react';
import Radium from 'radium';
import { TextField, Radio, FormControl, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import PresenceWidget from '../PresenceWidget/PresenceWidget';
import './AssestmentForm.css';

const AssestmentForm = props => (
  <form noValidate autoComplete="off" className="assestment-form">
    <FormControl component="fieldset">
      <FormLabel component="legend">Assestment date</FormLabel>
      <TextField
        className="date-input"
        type="date"
        defaultValue={props.assestment.date}
        onChange={props.onAssestmendDateChange}
      />
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Assestment place</FormLabel>
      <RadioGroup
        className="place-radio"
        aria-label="Assestment place"
        name="assestment-place"
        value={props.assestment.place}
        onChange={props.onAssestmentPlaceChange}>
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="clinic" control={<Radio />} label="Clinic" />
      </RadioGroup>
    </FormControl>
    <PresenceWidget
      onPresenceChange={props.onPresenceChange}
      onWorkerPresenceChange={props.onWorkerPresenceChange}
      presence={props.presence}
    />
  </form>
);

export default Radium(AssestmentForm);
