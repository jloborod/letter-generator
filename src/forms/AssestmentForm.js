import React from 'react';
import Radium from 'radium';
import { TextField, Radio, FormControl, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import PresenceWidget from './PresenceWidget';

const styles = {
  container: {
    display: 'flex'
  },
  dateControl: {

  },
  placeControl: {

  },
  date: {
    marginRight: '30px'
  },
  place: {
    flex: '50%',
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
}

const AssestmentForm = (props) => {
  return (
    <form noValidate autoComplete="off" style={styles.container}>

      <FormControl component="fieldset" style={styles.dateControl}>
        <FormLabel component="legend">Assestment date</FormLabel>
        <TextField
        style={styles.date}
        type="date"
        defaultValue={props.assestment.date}
        onChange={props.onAssestmendDateChange}/>
      </FormControl>

      <FormControl component="fieldset" style={styles.PlaceControl}>
        <FormLabel component="legend">Assestment place</FormLabel>
        <RadioGroup
        style={styles.place}
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
        presence={props.presence}>
      </PresenceWidget>

    </form>
  )
}

export default Radium(AssestmentForm);
