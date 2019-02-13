import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const AppTitle = ({ title }) => (
  <Typography variant='h4' gutterBottom>
    {title}
  </Typography>
);

AppTitle.propTypes = {
  title: PropTypes.string,
};

AppTitle.defaultProps = {
  title: 'App title',
};

export default AppTitle;
