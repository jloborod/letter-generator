import React from 'react';
import Radium from 'radium';
import { FormControl, FormControlLabel, FormLabel, FormGroup, Checkbox, Input } from '@material-ui/core';
import './PresenceWidget.css';

const PresenceWidget = props => (
  <div className="presence-widget">
    <div className='patient-column'>
      <FormControl component="fieldset">
        <FormLabel component="legend">Patient company</FormLabel>
        <FormGroup>
          <FormControlLabel label="Husband" control={<Checkbox checked={props.presence.husband} onChange={props.onPresenceChange} value="husband" />} />
          <FormControlLabel label="Wife" control={<Checkbox checked={props.presence.wife} onChange={props.onPresenceChange} value="wife" />} />
          <FormControlLabel label="Partner" control={<Checkbox checked={props.presence.partner} onChange={props.onPresenceChange} value="partner" />} />
          <FormControlLabel label="Daughter" control={<Checkbox checked={props.presence.daughter} onChange={props.onPresenceChange} value="daughter" />} />
          <FormControlLabel label="Son" control={<Checkbox checked={props.presence.son} onChange={props.onPresenceChange} value="son" />} />
          <FormControlLabel label="Friend" control={<Checkbox checked={props.presence.friend} onChange={props.onPresenceChange} value="friend" />} />
        </FormGroup>
      </FormControl>
    </div>
    <div className='workers-column'>
      <FormControl component="fieldset">
        <FormLabel component="legend">Worker company</FormLabel>
        <Input
          className="worker-input"
          placeholder="Worker name"
          name="worker1"
          onChange={props.onWorkerPresenceChange}
          inputProps={{'aria-label': 'Worker name'}}
        />   
        <Input
          className="worker-input"
          placeholder="Worker name"
          name="worker2"
          onChange={props.onWorkerPresenceChange}
          inputProps={{'aria-label': 'Worker name'}}
        />                    
      </FormControl>
    </div>
  </div>
);

export default Radium(PresenceWidget);
