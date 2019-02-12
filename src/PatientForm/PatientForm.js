import React from 'react';
import Radium from 'radium';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Input
} from '@material-ui/core';
import './PatientForm.css'


const PatientForm = props => (
  <form className="patient-form" noValidate autoComplete="off">
    <FormControl component="fieldset" className="name-control">
      <FormLabel component="legend">Patient Name</FormLabel>
      <Input
        onChange={props.onPatientNameChange}
        defaultValue={props.patient.name} 
      />
    </FormControl>
    <FormControl component="fieldset" className="gender-control">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        className="gender"
        aria-label="Gender"
        name="gender"
        value={props.patient.gender}
        onChange={props.onPatientGenderChange}
      >
        <FormControlLabel value="F" control={<Radio />} label="Female" />
        <FormControlLabel value="M" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  </form>
);

export default Radium(PatientForm);
