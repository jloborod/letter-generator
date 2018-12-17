import React from 'react';
import Radium from 'radium';
import { TextField, FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox } from '@material-ui/core';

const styles = {
  row: {
    display: 'flex'
  },
  column: {
    flex: '50%'
  }
}

const PatientForm = (props) => {
  return (
    <div style={styles.row}>
      <div style={styles.column}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Patient-side presence</FormLabel>
          <FormGroup>
            <FormControlLabel label="Husband" control={<Checkbox checked={props.presence.husband} onChange={props.onPresenceChange} value="husband"/>} />
            <FormControlLabel label="Wife" control={<Checkbox checked={props.presence.wife} onChange={props.onPresenceChange} value="wife"/>} />
            <FormControlLabel label="Daughter" control={<Checkbox checked={props.presence.daughter} onChange={props.onPresenceChange} value="daughter"/>} />
            <FormControlLabel label="Son" control={<Checkbox checked={props.presence.son} onChange={props.onPresenceChange} value="son"/>} />
          </FormGroup>
        </FormControl>
      </div>,
      <div style={styles.column}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Workers presence</FormLabel>
          <TextField
          id="clinic-presence-1"
          label="Worker name"/>
          <TextField
          id="clinic-presence-2"
          label="Worker name"/>
        </FormControl>
      </div>
    </div>
  )
}

export default Radium(PatientForm);
