import React from 'react';
import Radium from 'radium';
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, Input } from '@material-ui/core';


const styles = {
  container: {
    display: 'flex'
  },
  gender: {
    flex: '50%',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },

  nameControl: {
    flex: '50%',
    marginRight: '30px'
  },
  genderControl: {
    flex: '50%'
  },
  name: {}
}

const PatientForm = (props) => {
  return (
    <form style={styles.container} noValidate autoComplete="off">
      <FormControl component="fieldset" style={styles.nameControl}>
        <FormLabel component="legend">Patient Name</FormLabel>
        <Input
        style={styles.name}
        onChange={props.onPatientNameChange}
        defaultValue={props.patient.name}/>
      </FormControl>    

      <FormControl component="fieldset" style={styles.genderControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
        style={styles.gender}
        aria-label="Gender"
        name="gender"
        value={props.patient.gender}
        onChange={props.onPatientGenderChange}>
          <FormControlLabel value="F" control={<Radio />} label="Female" />
          <FormControlLabel value="M" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>    
    </form>
    )
}

export default Radium(PatientForm);
