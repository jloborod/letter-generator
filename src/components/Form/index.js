import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  FormGroup,
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Input,
} from '@material-ui/core';

const Form = ({
  name,
  gender,
  date,
  place,
  onChange,
}) => (
  <form noValidate autoComplete='off'>
    <FormGroup>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <FormControl component='fieldset' margin='normal' fullWidth>
            <FormLabel component='legend'>Patient Name</FormLabel>
            <Input
              name='name'
              type='text'
              value={name}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component='fieldset' margin='normal'>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              row
              name='gender'
              aria-label='Gender'
              value={gender}
              onChange={onChange}
            >
              <FormControlLabel
                value='female'
                label='Female'
                control={<Radio />}
              />
              <FormControlLabel
                value='male'
                label='Male'
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
    <FormGroup>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <FormControl component='fieldset' margin='normal' fullWidth>
            <FormLabel component='legend'>Assessment Date</FormLabel>
            <Input
              name='date'
              type='date'
              value={date}
              onChange={onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component='fieldset' margin='normal'>
            <FormLabel component='legend'>Assessment Place</FormLabel>
            <RadioGroup
              row
              name='place'
              aria-label='Assessment Place'
              value={place}
              onChange={onChange}
            >
              <FormControlLabel
                value='home'
                label='Home'
                control={<Radio />}
              />
              <FormControlLabel
                value='clinic'
                label='Clinic'
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  </form>
);

Form.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.oneOf([
    'female',
    'male',
  ]),
  date: PropTypes.string,
  onPatientNameChange: PropTypes.func,
  onPatientGenderChange: PropTypes.func,
  onChange: PropTypes.func,
};

Form.defaultProps = {
  name: '',
  gender: 'female',
  date: '',
  onPatientNameChange: () => ({}),
  onPatientGenderChange: () => ({}),
  onChange: () => ({}),
};

export default Form;
