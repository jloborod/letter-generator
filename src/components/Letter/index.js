import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

import styles from './Letter.module.css';

const Letter = ({
  name,
  gender,
  date,
  place,
}) => (
  <Paper className={styles.letter} elevation={4}>
    <Typography component='p' paragraph>
      Have a look at what you have chosen <span role='img' aria-label='yo'>😎</span>
    </Typography>
    <Typography component='p' variant='caption'>
      <strong>Name: </strong>{name}
    </Typography>
    <Typography component='p' variant='caption'>
      <strong>Gender: </strong>{gender}
    </Typography>
    <Typography component='p' variant='caption'>
      <strong>Assessment Date: </strong>{date}
    </Typography>
    <Typography component='p' variant='caption'>
      <strong>Assessment Place: </strong>{place}
    </Typography>
  </Paper>
);

Letter.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.oneOf([
    'female',
    'male',
  ]),
  date: PropTypes.string,
  place: PropTypes.oneOf([
    'home',
    'clinic',
  ]),
};

Letter.defaultProps = {
  name: '',
  gender: 'female',
  date: '',
  place: 'home',
};

export default Letter;
